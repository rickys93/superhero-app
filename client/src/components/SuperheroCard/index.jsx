import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    color: "#875053",
};

const SuperheroCard = ({
    id,
    name,
    healthy,
    vegetarian,
    votes,
    vote,
    deleteSuperhero,
}) => {
    return (
        <div className="superhero-card">
            <h3>
                <Link to={`/superheros/${id}`} style={linkStyle}>
                    {name}
                </Link>
            </h3>
            <p>
                <span className="votes-counter">Votes: {votes}</span>
            </p>
            <p className="superhero-details-holder">
                {vegetarian ? <span className="vegetarian icon">V</span> : ""}
                {healthy ? <span className="healthy icon">H</span> : ""}
                <button onClick={() => vote(id, 1)}>+</button>
                <button onClick={() => vote(id, -1)}>-</button>
            </p>
            <button onClick={() => deleteSuperhero(id)}>Delete</button>
            <br></br>
        </div>
    );
};

export default SuperheroCard;
