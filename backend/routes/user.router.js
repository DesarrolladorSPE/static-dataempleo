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
				if(err) { return response.json({Error: "Error creando el usuario"})}

				return response.json({Status: "Success"});
			});

		});
	}
	catch (err) {
		response.status(500).json({Error: err})
	}
});

router.post("/login", (request, res) => {
    const query = "SELECT * FROM login WHERE email = ?";
    connection.query(query, [request.body.email], (err, result) => {
        if (err) {
            return res.status(500).json({ Error: err.message })
        }

        if (result.length > 0) {
            bcrypt.compare(request.body.password.toString(), result[0].password, (bcryptErr, bcryptResponse) => {
                if (bcryptErr) {
                    return res.json({ Error: "Error al comparar contraseñas" });
                }

                if (bcryptResponse) {
                    return res.json({ Status: "Success" });
                } else {
                    return res.json({ Error: "La contraseña es incorrecta" });
                }
            });
        } else {
            return res.json({ Error: "El usuario no está registrado." });
        }
    });
});


module.exports = router;
