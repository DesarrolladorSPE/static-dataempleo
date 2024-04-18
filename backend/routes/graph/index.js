const express = require("express");
const { connection } = require("../../database");

const { obtenerFechaHoraHoy } = require("../../DateFunctions/index");
const { getQuery } = require("../../database/query");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const query = "SELECT * FROM graficas ORDER BY FECHA_CREACION DESC LIMIT 6";
		const graphs = await getQuery(query)

		return response.status(200).json({graphs: graphs})
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});

router.delete("/", async (request, response) => {
	try {
		const id = request.body.id;

		const query = `DELETE FROM graficas WHERE id = ?`;

		connection.query(query, id, (err, results) => {
			if(err) {
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});

router.patch("/", async (request, response) => {
	try {
		const id = request.body.id;

		const query = `
			UPDATE graficas
			SET TITULO_GRAFICA=?, AÑO=?, MES=?, TIPO_DATOS=?, TIPO_GRAFICA=?, DESCRIPCION=?, FECHA_CREACION=?, DATOS=?
			WHERE id = ${id}
		`;

		const fechaActual = obtenerFechaHoraHoy();

		const graphValues = {
			title: request.body.title,
			year: request.body.year,
			month: request.body.month,
			grapLabelsType: request.body.grapLabelsType,
			graphType: request.body.graphType,
			description: request.body.description,
			date: fechaActual,
			values: null,
		}

		const values = Object.values(graphValues);

		connection.query(query, values, (err, results) => {
			if(err) {
				console.log(err);
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});

router.post("/new", (request, response) => {
	try {
		const query = "INSERT INTO graficas (`TITULO_GRAFICA`,`AÑO`,`MES`, `TIPO_DATOS`, `TIPO_GRAFICA`, `DESCRIPCION`, `FECHA_CREACION`, `DATOS`) VALUES (?,?,?,?,?,?,?,?)";

		const fechaActual = obtenerFechaHoraHoy();

		const graphValues = {
			title: request.body.title,
			year: request.body.year,
			month: request.body.month,
			grapLabelsType: request.body.grapLabelsType,
			graphType: request.body.graphType,
			description: request.body.description,
			date: fechaActual,
			values: null,
		}

		const values = Object.values(graphValues);

		connection.query(query, values, (err, results) => {
			if(err) {
				return response.status(500).json({ Error: err.message })
			}

			return response.json({ Status: "Success" });
		});
	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});


module.exports = router;
