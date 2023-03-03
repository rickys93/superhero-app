import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    color: "#875053",
};

const HomePage = () => {
    return (
        <main>
            <h1>Superhero Rankings</h1>
            <p>
                Welcome to <b>Superhero Rankings</b>, the world's most famous
                superhero-ranking site!
            </p>
            <p>
                Rank superheros, see scores, and have a superheroalicious time!
            </p>
            <ul>
                <li>
                    <Link to="/superheros" style={linkStyle}>
                        Explore superheros
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
