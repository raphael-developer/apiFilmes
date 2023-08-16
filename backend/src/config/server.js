const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const routes = require("../../routes");

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(routes);

module.exports = app;
