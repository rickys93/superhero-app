import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    color: "#875053",
};

const HomePage = () => {
    return (
        <main>
            <h1>superhero Rankings</h1>
            <p>
                Welcome to <b>superhero Rankings</b>, the world's most famous
                superhero-ranking site!
            </p>
            <p>
                Rank superheroes, see scores, and have a superheroalicious time!
            </p>
            <ul>
                <li>
                    <Link to="/superheroes" style={linkStyle}>
                        Explore superheroes
                    </Link>
                </li>
                <li>
                    <Link to="/best" style={linkStyle}>
                        See the champion
                    </Link>
                </li>
            </ul>
        </main>
    );
};

export default HomePage;
