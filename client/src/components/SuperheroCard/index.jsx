import React from "react";
import { Link } from "react-router-dom";

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
            <p> <span className="powerstats">Intelligence: {intelligence}</span> </p>
            <p> <span className="powerstats">Strength: {strength}</span> </p>
            <p> <span className="powerstats">Speed: {speed}</span> </p>
            <p> <span className="powerstats">Durability: {durability}</span> </p>
            <p> <span className="powerstats">Power: {power}</span> </p>
            <p> <span className="powerstats">Combat: {combat}</span> </p>
            <button onClick={() => deleteSuperhero(id)}>Delete</button>
            <br></br>
        </div>
    );
};

export default SuperheroCard;
