const express = require("express");
const { connection } = require("../database");


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PropertiesReader = require("properties-reader");
const properties = PropertiesReader("./app.properties.ini")

const { verifyUser } = require("../middlewares/verifyUser");
const { postQuery } = require("../database/query");

const router = express.Router();


router.get("/", verifyUser, (request, response) => {
	return response.json({Status: "Success", name: request.name})
})


const salt = 10;

router.post("/new", (request, response) => {
	const query = "INSERT INTO graphs (`name`,`email`,`password`) VALUES (?)";

	const graphValues = {
        title: request.body.title,
        year: request.body.year,
        month: request.body.month,
        grapLabelsType: request.body.grapLabelsType,
        graphType: request.body.graphType,
        description: request.body.description,
        values: request.body.values,
    }

	console.log(graphValues);

	// postQuery()

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
