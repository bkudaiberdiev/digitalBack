const express = require("express");
const cors = require("cors");
const citiesRouter = require("./routers/cities.router")

const app = express();
app.use(cors())

app.use(express.json())
app.use(citiesRouter)

module.exports = app