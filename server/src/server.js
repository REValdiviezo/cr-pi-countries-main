const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const countriesRouter = require("./routes/countryRouter");
const activitiesRouter = require("./routes/activityRouter")

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use('/countries', countriesRouter);
server.use('/activities', activitiesRouter);

module.exports = server