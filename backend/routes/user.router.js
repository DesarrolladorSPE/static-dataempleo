const express = require("express");
const { connection } = require("../database");
const bcrypt = require("bcrypt");

const router = express.Router();

const salt = 10;

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
				if(err) { throw(err)}

				return response.status(200).json({Status: "Success"});
			});

		});
	}
	catch (err) {
		response.status(500).json({Error: err})
	}
});
router.post("/login", (request, response) => {
	const query = "SELECT * FROM login WHERE email = ?";

	try {
		connection.query(query, [request.body.email.toString()], (err, result) => {
			if (err) {
				throw new Error(err);
			}

			if (result.length > 0) {
				bcrypt.compare(request.body.password.toString(), result[0].password, (err, bcryptResult) => {
					if (err) {
						throw new Error(err);
					}

					if (bcryptResult) {
						return response.status(200).json({ Status: "Success" });
					} else {
						throw new Error("La contraseña no coincide");
					}
				});
			} else {
				throw new Error("El usuario no está registrado.");
			}
		});
	} catch (err) {
		response.status(500).json({ Error: err.message }); // Accede al mensaje de error usando err.message
	}
});


module.exports = router;
