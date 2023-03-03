const Superhero = require("../models/superhero.js");

async function index(req, res) {
    try {
        const superheroes = await Superhero.getAll();
        res.status(200).json(superheroes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const superhero = await Superhero.getOneById(id);
        res.status(200).json(superhero);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function getTop(req, res) {
    try {
        const id = parseInt(req.params.id);
        const superhero = await Superhero.getTopsuperhero(id);
        res.status(200).json(superhero);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const superhero = await Superhero.create(req.body);
        res.status(201).json(superhero);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const superhero = await Superhero.getOneById(id);
        const result = await superhero.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const superhero = await Superhero.getOneById(id);
        await superhero.destroy();
        res.sendStatus(204);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

module.exports = {
    index,
    show,
    update,
    getTop,
    create,
    destroy,
};
