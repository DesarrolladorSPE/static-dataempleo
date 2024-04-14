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
		// const query = `SELECT * FROM graficas WHERE  AÑO = 2024 AND MES = 4 ORDER BY FECHA_CREACION ASC LIMIT 6`

		const result = await getQuery(query)


		return response.status(200).json({exportGraphs: result.reverse()})

	} catch (err) {
		console.log(err)
		return response.status(500).json({message: "Internal Server Error"})
	}


});


module.exports = router;
