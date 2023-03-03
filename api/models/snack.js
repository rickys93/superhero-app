const db = require("../database/connect");

class superhero {
    constructor({
        superhero_id,
        superhero_name,
        superhero_description,
        healthy,
        vegetarian,
        votes,
    }) {
        this.id = superhero_id;
        this.name = superhero_name;
        this.description = superhero_description;
        this.healthy = healthy;
        this.vegetarian = vegetarian;
        this.votes = votes;
    }

    static async getAll() {
        const response = await db.query(
            "SELECT superhero_id, superhero_name, healthy, vegetarian, votes FROM superhero ORDER BY superhero_name;"
        );
        return response.rows.map((g) => new superhero(g));
    }

    static async getTopsuperhero() {
        const response = await db.query(
            "SELECT * FROM superhero ORDER BY votes DESC LIMIT 1;"
        );
        if (response.rows.length != 1) {
            throw new Error("Unable to locate superhero.");
        }
        return new superhero(response.rows[0]);
    }

    static async getOneById(id) {
        const response = await db.query(
            "SELECT * FROM superhero WHERE superhero_id = $1;",
            [id]
        );
        if (response.rows.length != 1) {
            throw new Error("Unable to locate superhero.");
        }
        return new superhero(response.rows[0]);
    }

    static async create(data) {
        const {
            superhero_name,
            superhero_description,
            healthy = "FALSE",
            vegetarian = "FALSE",
        } = data;
        const response = await db.query(
            "INSERT INTO superhero (superhero_name, superhero_description, healthy, vegetarian) VALUES ($1, $2, $3, $4) RETURNING *;",
            [superhero_name, superhero_description, healthy, vegetarian]
        );

        return response.rows.map((w) => new superhero(w));
    }

    async update(data) {
        const response = await db.query(
            "UPDATE superhero SET votes = $1 WHERE superhero_id = $2 RETURNING superhero_id, votes;",
            [this.votes + data.votes, this.id]
        );
        if (response.rows.length != 1) {
            throw new Error("Unable to update votes.");
        }
        return new superhero(response.rows[0]);
    }

    async destroy() {
        const response = await db.query(
            "DELETE FROM superhero WHERE superhero_id = $1 RETURNING *;",
            [this.id]
        );

        return new superhero(response.rows[0]);
    }
}

module.exports = superhero;
