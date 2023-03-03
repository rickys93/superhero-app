import React, { useState, useEffect } from "react";

import { superheroFilters, superheroCard } from "../../components";

const superherosPage = () => {
    const [superheros, setsuperheros] = useState([]);
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
            setsuperheros(
                superheros.map((s) =>
                    s.id == data.id ? { ...s, votes: data.votes } : s
                )
            );
        }
    }

    async function deletesuperhero(id) {
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
                const updatedsuperheros = [...superheros].filter(
                    (s) => s.id !== id
                );
                setsuperheros(updatedsuperheros);
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        setLoading(true);
        async function loadsuperheros() {
            const response = await fetch("http://localhost:3000/superheros");
            if (response.status === 200) {
                const data = await response.json();
                setsuperheros(data);
                setLoading(false);
            }
        }

        loadsuperheros();
    }, []);

    function displaysuperheros() {
        return superheros
            .filter((s) => !vegetarianOnly || s.vegetarian)
            .filter((s) => !healthyOnly || s.healthy)
            .filter(
                (s) =>
                    textFilter.length == 0 ||
                    s.name.toLowerCase().includes(textFilter.toLowerCase())
            )
            .map((s) => (
                <superheroCard
                    key={s.id}
                    id={s.id}
                    name={s.name}
                    vegetarian={s.vegetarian}
                    healthy={s.healthy}
                    votes={s.votes}
                    vote={vote}
                    deletesuperhero={deletesuperhero}
                />
            ));
    }

    return (
        <main className="superhero-main">
            <h1>superheros</h1>
            <superheroFilters
                healthyOnly={healthyOnly}
                vegetarianOnly={vegetarianOnly}
                textFilter={textFilter}
                setHealthyOnly={setHealthyOnly}
                setVegetarianOnly={setVegetarianOnly}
                setTextFilter={setTextFilter}
            />
            <div className="superhero-holder">
                {loading ? <h2>Loading...</h2> : displaysuperheros()}
            </div>
        </main>
    );
};

export default superherosPage;