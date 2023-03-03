const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const superheroRouter = require("./routers/superhero");

const api = express();

api.use(cors());
api.use(express.json());
api.use(morgan("tiny"));

api.get("/", (req, res) => {
    res.json({
        title: "superhero Rankings",
        description: "Find and rate the best superheros ever!",
    });
});

api.use("/superheros", superheroRouter);

module.exports = api;
