const express = require("express");
const { sql } = require("../database")

const router = express.Router();

router.get("/", (request, response) => {
    sql.query("SELECT * FROM Vacantes_Vigentes_Completo ORDER BY CODIGO_VACANTE DESC OFFSET 0 ROWS FETCH NEXT 50 ROWS ONLY", (err, results) => {
        if (err) {
            throw err;
        }
        return response.status(200).json(results);
    })
});

const PAGE_SIZE = 50; // Número de resultados por página

router.get("/resultados", async (request, response) => {
	try {
        const page = parseInt(request.query.page, 10) || 1;
        const offset = (page - 1) * PAGE_SIZE;

        const searchTerm = request.query.BUSQUEDA || '';
		const descriptionFilter = request.query.DESCRIPCION_VACANTE || '';

        const filterConditions = Object.keys(request.query)
            .filter((key) => key !== "page" && request.query[key] !== "" && key !== "BUSQUEDA" && key !== "DESCRIPCION_VACANTE")
            .map((key) => `${key} = '${request.query[key]}'`)
            .join(" AND ");

        // QUERY BASE
        const baseQuery = `
            SELECT *
            FROM Vacantes_Vigentes_Completo
            WHERE LOWER(BUSQUEDA) LIKE LOWER('%${searchTerm}%')
			AND (DESCRIPCION_VACANTE) LIKE ('%${descriptionFilter}%')
            ${filterConditions ? `AND ${filterConditions}` : ""}
            ORDER BY CODIGO_VACANTE DESC
            OFFSET ${offset} ROWS
            FETCH NEXT ${PAGE_SIZE} ROWS ONLY
        `;

		// TOTAL REGISTROS SEGUN BUSQUUEDA
        const totalRecordsBySearchQuery = await sql.query(`
            SELECT COUNT(*) AS total_registros
            FROM Vacantes_Vigentes_Completo
            WHERE LOWER(BUSQUEDA) LIKE LOWER('%${searchTerm}%')
			AND (DESCRIPCION_VACANTE) LIKE ('%${descriptionFilter}%')
            ${filterConditions ? `AND ${filterConditions}` : ""}`
        );
        const total_registros = totalRecordsBySearchQuery.recordset[0].total_registros;


		// TOTAL REGISTROS GLOBALES
        const totalRegistrosQuery = await sql.query(`
			SELECT COUNT(*) AS total FROM Vacantes_Vigentes_Completo
		`);
        const total = totalRegistrosQuery.recordset[0].total;

		// TOTAL REGISTROS POR DEPARTAMENTO
        const totalRecordsByDepartmentQuery = await sql.query(`
            SELECT DEPARTAMENTO, COUNT(*) AS total_vacantes
            FROM Vacantes_Vigentes_Completo
            WHERE LOWER(BUSQUEDA) LIKE LOWER('%${searchTerm}%')
			AND (DESCRIPCION_VACANTE) LIKE ('%${descriptionFilter}%')
            ${filterConditions ? `AND ${filterConditions}` : ""}
            GROUP BY DEPARTAMENTO
        `);
        const total_departments = totalRecordsByDepartmentQuery.recordset.map(row => ({
            department: row.DEPARTAMENTO,
            total: row.total_vacantes
        }));


        const resultsQuery = await sql.query(baseQuery);
        const totalPages = Math.ceil(total_registros / PAGE_SIZE);

        return response.status(200).json({
            resultados: resultsQuery.recordset,
            totalPages,
            currentPage: page,
            total_registros,
            total,
            total_departments
        });
    }
    catch (err) {
        console.error('Error fetching results:', err);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;