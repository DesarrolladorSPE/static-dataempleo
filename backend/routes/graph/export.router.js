const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const filterConditions = Object.keys(request.query)
			.filter((key) => request.query[key] !== "")
			.map((key) => `${key} = '${request.query[key]}'`)
			.join(" AND ");

		const query = `SELECT * FROM graficas WHERE  ${filterConditions ? filterConditions : ""} ORDER BY FECHA_CREACION DESC LIMIT 6`;

		const result = await getQuery(query)


		return response.status(200).json({exportGraphs: result.reverse()})

	} catch (err) {
		return response.status(500).json({Error: err.message});
	}
});


module.exports = router;
