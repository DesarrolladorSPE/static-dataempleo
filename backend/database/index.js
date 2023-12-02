const sql = require("mssql");

const sqlConfig = {
	user: "Userdesarrollo",
	password: "D3s4Rr0lLo",
	database: "PRUEBAS",
	server: "10.140.0.22",
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	},
	options: {
		trustServerCertificate: true,
		encrypt: false
	}
}

sql.connect(sqlConfig, (err) => {
	if (err) {
		console.error('Error al conectar a la base de datos:', err);
		return;
	} else {
		console.log('Conexión a la base de datos exitosa');
	}
});

module.exports = { sql };