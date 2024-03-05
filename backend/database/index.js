const sql = require("mssql");
var mysql = require('mysql');

// const sqlConfig = {
// 	user: "Userdesarrollo",
// 	password: "D3s4rR0l1o",
// 	database: "PRUEBAS",
// 	server: "10.140.0.22",
// 	pool: {
// 		max: 10,
// 		min: 0,
// 		idleTimeoutMillis: 30000
// 	},
// 	options: {
// 		trustServerCertificate: true,
// 		encrypt: false
// 	}
// }

// sql.connect(sqlConfig, (err) => {
// 	if (err) {
// 		console.error('Error al conectar a la base de datos MSSQL:', err);
// 		return;
// 	} else {
// 		console.log('Conexión a la base de datos exitosa');
// 	}
// });


// Data Empleo
// DEV
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database: "data_empleo"
});

// PROD
// var connection = mysql.createConnection({
//     host     : "10.140.0.16",
//     user     : "uaespe.sysdba",
//     password : "zGAo_R9k.SK",
//     database: "bodega",
// });



connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Conexión a la base de datos exitosa")
});


module.exports = { sql, connection };