import React, { useState, useEffect } from "react";

import { SuperheroFilters, SuperheroCard } from "../../components";

const SuperheroesPage = () => {
    const [superheroes, setSuperheroes] = useState([]);
    //const [healthyOnly, setHealthyOnly] = useState(false);
    const [activeOnly, setActiveOnly] = useState(false);
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
            `http://localhost:3000/superheroes/${id}`,
            options
        );
        if (response.status === 200) {
            const data = await response.json();
            setSuperheroes(
                superheroes.map((s) =>
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
                `http://localhost:3000/superheroes/${id}`,
                options
            );
            if (response.status === 204) {
                const updatedSuperheroes = [...superheroes].filter(
                    (s) => s.id !== id
                );
                setSuperheroes(updatedSuperheroes);
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        setLoading(true);
        async function loadSuperheroes() {
            const response = await fetch("http://localhost:3000/superheroes");
            if (response.status === 200) {
                const data = await response.json();
                setSuperheroes(data);
                setLoading(false);
            }
        }

        loadSuperheroes();
    }, []);

    function displaySuperheroes() {
        return superheroes
            .filter((s) => !activeOnly || s.active)
            .filter(
                (s) =>
                    textFilter.length == 0 ||
                    s.name.toLowerCase().includes(textFilter.toLowerCase())
            )
            .map((s) => (
                <SuperheroCard
                    key={s.id}
                    id={s.id} // check later if necessary
                    name={s.name}
                    intelligence={s.intelligence}
                    strength={s.strength}
                    speed={s.speed}
                    durability={s.durability}
                    power={s.power}
                    combat={s.combat}
                    votes={s.votes}
                    active={s.active}
                    vote={vote}
                    deleteSuperhero={deleteSuperhero}
                />
            ));
    }

    return (
        <main className="superhero-main">
            <h1>superheroes</h1>
            <SuperheroFilters
                activeOnly={activeOnly}
                textFilter={textFilter}
                setActiveOnly={setActiveOnly}
                setTextFilter={setTextFilter}
            />
            <div className="superhero-holder">
                {loading ? <h2>Loading...</h2> : displaySuperheroes()}
            </div>
        </main>
    );
};

export default SuperheroesPage;
