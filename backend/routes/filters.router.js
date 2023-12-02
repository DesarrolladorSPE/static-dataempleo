const express = require("express");
const { sql } = require("../database")

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const rangoSalarialQuery = await sql.query`SELECT DISTINCT RANGO_SALARIAL FROM Vacantes_Vigentes_Completo`;
        const rangoSalarial = rangoSalarialQuery.recordset.map(row => row.RANGO_SALARIAL);

		const prestadorQuery = await sql.query`SELECT DISTINCT NOMBRE_PRESTADOR FROM Vacantes_Vigentes_Completo`;
        const prestador = prestadorQuery.recordset.map(row => row.NOMBRE_PRESTADOR);

		const contratoQuery = await sql.query`SELECT DISTINCT TIPO_CONTRATO FROM Vacantes_Vigentes_Completo`;
        const tipoContrato = contratoQuery.recordset.map(row => row.TIPO_CONTRATO);

		const estudiosQuery = await sql.query`SELECT DISTINCT NIVEL_ESTUDIOS FROM Vacantes_Vigentes_Completo`;
        const nivelDeEstudios = estudiosQuery.recordset.map(row => row.NIVEL_ESTUDIOS);

		return response.status(200).json({
			filters: {
				rangoSalarial,
				prestador,
				tipoContrato,
				nivelDeEstudios
			}
		});
	}
	catch (err) {
		console.error('Error fetching results:', err);
		return response.status(500).json({ error: 'Internal Server Error' });
	}
});


router.get("/total", async (request, response) => {
    try {
        const resultsCountQuery = await sql.query(`
            SELECT DEPARTAMENTO, COUNT(*) AS total_vacantes
            FROM Vacantes_Vigentes_Completo
            GROUP BY DEPARTAMENTO
        `);
        const total_departments = resultsCountQuery.recordset.map(row => ({
            department: row.DEPARTAMENTO,
            total: row.total_vacantes
        }));

        return response.status(200).json({ total_departments });
    }
	catch (err) {
        console.error('Error fetching results:', err);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
