const express = require("express");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const routerApi = require("./routes");

const app = express();
const port = 3080;

app.use(express.json());
const whiteList = [
	"http://localhost:5173",
	"http://127.0.0.1:5173",
	"https://buscadordeempleo.gov.co/",
	"http://127.0.0.1:3090",
];
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("No permitido"));
        }
    },
	methods: ["POST", "GET"],
	credentials: true,
}
app.use(cors(options));
app.use(cookieParser());



app.get("/", (request, response) => {
    response.send("Hola mi server backend para Data Empleo");
});

routerApi(app);

app.listen(port, () => {
    console.log("Escuchando en el puerto: " + port);
})
