import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const linkStyle = {
    color: "#875053",
};

const BestSuperheroPage = () => {
    const [loading, setLoading] = useState(false);
    const [superhero, setSuperhero] = useState({});

    useEffect(() => {
        setLoading(true);
        async function loadSuperhero() {
            const response = await fetch(
                "http://localhost:3000/superheros/top"
            );
            const data = await response.json();
            setSuperhero(data);
            setLoading(false);
        }

        loadSuperhero();
    }, []);

    function displaySuperhero() {
        return (
            <main>
                <h2>The best superhero ever:</h2>
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

                <Link to="/superheros" style={linkStyle}>
                    View the competition
                </Link>
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

export default BestSuperheroPage;
