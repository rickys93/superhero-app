const db = require("../database/connect");

class Superhero {
    constructor({
        superhero_id,
        name,
        description,
        intelligence,
        strength,
        speed,
        durability,
        power,
        combat,
        votes,
    }) {
        this.id = superhero_id;
        this.name = name;
        this.description = description;
        this.intelligence = intelligence;
        this.strength = strength;
        this.speed = speed;
        this.durability = durability;
        this.power = power;
        this.combat = combat;
        this.votes = votes;
    }

    static async getAll() {
        const response = await db.query(
            "SELECT superhero_id, name, description, intelligence, strength, speed, durability, power, combat, votes FROM superhero ORDER BY name;"
        );
        return response.rows.map((g) => new Superhero(g));
    }

    static async getTopsuperhero() {
        const response = await db.query(
            "SELECT * FROM superhero ORDER BY votes DESC LIMIT 1;"
        );
        if (response.rows.length != 1) {
            throw new Error("Unable to locate superhero.");
        }
        return new Superhero(response.rows[0]);
    }

    static async getOneById(id) {
        const response = await db.query(
            "SELECT * FROM superhero WHERE superhero_id = $1;",
            [id]
        );
        if (response.rows.length != 1) {
            throw new Error("Unable to locate superhero.");
        }
        return new Superhero(response.rows[0]);
    }

    static async create(data) {
        const {
            name,
            description,
            intelligence = 0,
            strength = 0,
            speed = 0,
            durability = 0,
            power = 0,
            combat = 0,
        } = data;
        const response = await db.query(
            "INSERT INTO superhero (name, description, intelligence, strength, speed, durability, power, combat) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
            [
                name,
                description,
                intelligence,
                strength,
                speed,
                durability,
                power,
                combat,
            ]
        );

        return response.rows.map((w) => new Superhero(w));
    }

    async update(data) {
        const response = await db.query(
            "UPDATE superhero SET votes = $1 WHERE superhero_id = $2 RETURNING superhero_id, votes;",
            [this.votes + data.votes, this.id]
        );
        if (response.rows.length != 1) {
            throw new Error("Unable to update votes.");
        }
        return new Superhero(response.rows[0]);
    }

    async destroy() {
        const response = await db.query(
            "DELETE FROM superhero WHERE superhero_id = $1 RETURNING *;",
            [this.id]
        );

        return new Superhero(response.rows[0]);
    }
}

module.exports = Superhero;
