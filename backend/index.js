const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const routerApi = require("./routes");

const app = express();
const port = 3080;

app.use(express.json());
const whiteList = [
    //DEV
	"http://localhost:5173",
	"http://127.0.0.1:5173",
	"http://127.0.0.1:3090",

    //QA Y PROD
    "http://10.140.0.16:15205",
	"https://buscadordeempleo.gov.co/",
];
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("No permitido"));
        }
    },
	methods: ["POST", "GET", "DELETE", "PATCH"],
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
