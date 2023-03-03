import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SuperheroPage = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [superhero, setSuperhero] = useState({});

    useEffect(() => {
        setLoading(true);
        async function loadSuperhero() {
            const response = await fetch(
                `http://localhost:3000/superheros/${id}`
            );

            if (response.status === 200) {
                const data = await response.json();
                setSuperhero(data);
                setLoading(false);
            }
        }

        loadSuperhero();
    }, []);

    function displaySuperhero() {
        return (
            <main>
                <h1 className="close-title">{superhero.name}</h1>
                <p>
                    <em>{superhero.description}</em>
                </p>
                <span className="votes-counter">Votes: {superhero.votes}</span>
                <p className="superhero-details-holder">
                    {superhero.vegetarian ? (
                        <span className="vegetarian icon">V</span>
                    ) : (
                        ""
                    )}
                    {superhero.healthy ? (
                        <span className="healthy icon">H</span>
                    ) : (
                        ""
                    )}
                </p>
                <Link to="/superheros">Back</Link>
            </main>
        );
    }

    return loading ? (
        <h2>
            <em>loading...</em>
        </h2>
    ) : (
        displaySuperhero()
    );
};

export default SuperheroPage;
