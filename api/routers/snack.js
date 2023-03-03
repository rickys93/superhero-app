const { Router } = require("express");

const superheroController = require("../controllers/superhero.js");

const superheroRouter = Router();

superheroRouter.get("/", superheroController.index);
superheroRouter.get("/top", superheroController.getTop);
superheroRouter.get("/:id", superheroController.show);
superheroRouter.post("/", superheroController.create);
superheroRouter.patch("/:id", superheroController.update);
superheroRouter.delete("/:id", superheroController.destroy);

module.exports = superheroRouter;
