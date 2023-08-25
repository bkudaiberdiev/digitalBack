const express =  require("express")
const citiesController = require("./citites.controller")
const citiesRouter = express.Router();
citiesRouter.get("/cities", citiesController.getAllCities)

module.exports = citiesRouter;