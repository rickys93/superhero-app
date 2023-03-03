import React from "react";
import { Link } from "react-router-dom";

import './style.css'

const linkStyle = {
    color: "#cfdaf8",
};

const SuperheroCard = ({
    id,
    name,
    active,
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
    votes,
    vote,
    deleteSuperhero,
}) => {
    return (
        <div className="superhero-card">
            <h3>
                <Link to={`/superheroes/${id}`} style={linkStyle}>
                    {name}
                </Link>
            </h3>
            <p>
                <span className="votes-counter">Votes: {votes}</span>
            </p>
            <p className="superhero-details-holder">
                {active ? <span className="vegetarian icon">A</span> : ""}
                <button onClick={() => vote(id, 1)}>+</button>
                <button onClick={() => vote(id, -1)}>-</button>
            </p>
            <div className="stats-container">
                <div className="powerstats">Intelligence: {intelligence}</div>
                <div className="powerstats">Strength: {strength}</div>
                <div className="powerstats">Speed: {speed}</div>
                <div className="powerstats">Durability: {durability}</div>
                <div className="powerstats">Power: {power}</div>
                <div className="powerstats">Combat: {combat}</div>
            </div>
            <button onClick={() => deleteSuperhero(id)}>Delete</button>
            <br></br>
        </div>
    );
};

export default SuperheroCard;
