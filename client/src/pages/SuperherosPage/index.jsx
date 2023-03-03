import React, { useState, useEffect } from "react";

import { SuperheroFilters, SuperheroCard } from "../../components";

const superherosPage = () => {
    const [superheros, setSuperheros] = useState([]);
    const [healthyOnly, setHealthyOnly] = useState(false);
    const [vegetarianOnly, setVegetarianOnly] = useState(false);
    const [textFilter, setTextFilter] = useState("");
    const [loading, setLoading] = useState(false);

    async function vote(id, value) {
        const options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                votes: value,
            }),
        };
        const response = await fetch(
            `http://localhost:3000/superheros/${id}`,
            options
        );
        if (response.status === 200) {
            const data = await response.json();
            setSuperheros(
                superheros.map((s) =>
                    s.id == data.id ? { ...s, votes: data.votes } : s
                )
            );
        }
    }

    async function deleteSuperhero(id) {
        try {
            const options = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            };
            const response = await fetch(
                `http://localhost:3000/superheros/${id}`,
                options
            );
            if (response.status === 204) {
                const updatedSuperheros = [...superheros].filter(
                    (s) => s.id !== id
                );
                setSuperheros(updatedSuperheros);
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        setLoading(true);
        async function loadSuperheros() {
            const response = await fetch("http://localhost:3000/superheros");
            if (response.status === 200) {
                const data = await response.json();
                setSuperheros(data);
                setLoading(false);
            }
        }

        loadSuperheros();
    }, []);

    function displaySuperheros() {
        return superheros
            .filter((s) => !vegetarianOnly || s.vegetarian)
            .filter((s) => !healthyOnly || s.healthy)
            .filter(
                (s) =>
                    textFilter.length == 0 ||
                    s.name.toLowerCase().includes(textFilter.toLowerCase())
            )
            .map((s) => (
                <SuperheroCard
                    key={s.id}
                    id={s.id}
                    name={s.name}
                    vegetarian={s.vegetarian}
                    healthy={s.healthy}
                    votes={s.votes}
                    vote={vote}
                    deleteSuperhero={deleteSuperhero}
                />
            ));
    }

    return (
        <main className="superhero-main">
            <h1>superheros</h1>
            <SuperheroFilters
                healthyOnly={healthyOnly}
                vegetarianOnly={vegetarianOnly}
                textFilter={textFilter}
                setHealthyOnly={setHealthyOnly}
                setVegetarianOnly={setVegetarianOnly}
                setTextFilter={setTextFilter}
            />
            <div className="superhero-holder">
                {loading ? <h2>Loading...</h2> : displaySuperheros()}
            </div>
        </main>
    );
};

export default superherosPage;
