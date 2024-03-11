const express = require("express");
const { connection } = require("../database");

const PropertiesReader = require("properties-reader");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


const properties = PropertiesReader("./app.properties.ini")

const router = express.Router();

const salt = 5;

router.post("/register", (request, response) => {
	const query = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";

	try {
		bcrypt.hash(request.body.password.toString(), salt, (err, hash) => {
			if (err) { throw(err); }

			const values = [
				request.body.name,
				request.body.email,
				hash,
			]

			connection.query(query, [values], (err, result) => {
				if(err) { return response.json({Error: "Error creando el usuario"})}

				return response.json({Status: "Success"});
			});

		});
	}
	catch (err) {
		response.status(500).json({Error: err})
	}
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
						throw err.message;
						return res.json({ Error: "Error al comparar contraseñas" });
					}
	
					if (response) {
						const name = data[0].name;
						const token = jwt.sign({name}, `${properties.get("app.login.token")}`, {expiresIn: "1d"});
						res.cookie("token", token);
	
						return res.json({ Status: "Success" });
					} else {
						throw Error("La contraseña es incorrecta.")
						return res.json({ Error: "La contraseña es incorrecta" });
					}
				});
			} else {
				throw Error("El usuario no está registrado.")
				return res.json({ Error: "El usuario no está registrado." });
			}
		});	
	} catch (err) {
		return res.status(500).json({Error: err.message})
	}
});


module.exports = router;
