const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const snackRouter = require("./routers/snack");

const api = express();

api.use(cors());
api.use(express.json());
api.use(morgan("tiny"));

api.get("/", (req, res) => {
    res.json({
        title: "Snack Rankings",
        description: "Find and rate the best snacks ever!",
    });
});

api.use("/snacks", snackRouter);

module.exports = api;
