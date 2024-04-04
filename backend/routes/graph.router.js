const express = require("express");
const { connection } = require("../database");


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PropertiesReader = require("properties-reader");
const properties = PropertiesReader("./app.properties.ini")

const { obtenerFechaHoraHoy } = require("../DateFunctions/index");

const router = express.Router();



router.post("/new", (request, response) => {
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
});

router.post("/login", (req, res) => {
	try {
		const query = "SELECT * FROM login WHERE email = ?";

		connection.query(query, [req.body.email], (err, data) => {
			if (err) {
				return res.status(500).json({ Error: err.message })
			}

			if (data.length > 0) {
				bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
					if (err) {
						return res.json({ Error: "Error al comparar contraseñas" });
					}

					if (response) {
						const name = data[0].name;
						const token = jwt.sign({name}, `${properties.get("app.login.token")}`, {expiresIn: "1d"});
						res.cookie("token", token);

						return res.json({ Status: "Success" });
					} else {
						return res.json({ Error: "La contraseña es incorrecta" });
					}
				});
			} else {
				return res.json({ Error: "El usuario no está registrado." });
			}
		});
	} catch (err) {
		return res.status(500).json({Error: err.message})
	}
});


router.get("/logout", (request, response) => {
	response.clearCookie("token")
	return response.json({Status: "Success"})
})


module.exports = router;
