const express = require("express");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


const userRouter = require("./user.router.js")

const graphRouter = require("./graph/index.js")
const graphNewRouter = require("./graph/new.router.js")
const graphExportRouter = require("./graph/export.router.js")


const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${properties.get("app.api.structure")}/v1`, router);

	// Routes
	router.use("/user", userRouter);

	router.use("/graph", graphRouter);
	router.use("/graph/new", graphNewRouter);
	router.use("/graph/export", graphExportRouter);
}

module.exports = routerApi;