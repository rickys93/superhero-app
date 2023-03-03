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
        title: "Superhero Rankings",
        description: "Find and rate the best superheroes ever!",
    });
});

api.use("/superheroes", superheroRouter);

module.exports = api;
