import React from "react";
import StatInput from "../StatInput";

export default function SuperheroForm({
    inputText,
    setInputText,
    description,
    setDescription,
    message,
    setMessage,
    active,
    setActiveCheckbox,
    intelligence,
    setIntelligenceCheckbox,
    strength,
    setStrengthCheckbox,
    speed,
    setSpeedCheckbox,
    durability,
    setDurabilityCheckbox,
    power,
    setPowerCheckbox,
    combat,
    setCombatCheckbox,
}) {
    function handleInput(e) {
        setInputText(e.target.value);
    }

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handleActive() {
        setActiveCheckbox(!active);
    }

    function handleIntelligence(e) {
        setIntelligenceCheckbox(e.target.value);
        console.log(e.target.value);
    }
    function handleStrength(e) {
        setStrengthCheckbox(e.target.value);
    }
    function handleSpeed(e) {
        setSpeedCheckbox(e.target.value);
    }
    function handleDurability(e) {
        setDurabilityCheckbox(e.target.value);
    }
    function handlePower(e) {
        setPowerCheckbox(e.target.value);
    }
    function handleCombat(e) {
        setCombatCheckbox(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputText.length > 0 && description.length > 0) {
            fetch("http://localhost:3000/superheroes", {
                method: "POST",
                body: JSON.stringify({
                    name: inputText,
                    description: description,
                    active: active,
                    intelligence: intelligence,
                    strength: strength,
                    speed: speed,
                    durability: durability,
                    power: power,
                    combat: combat,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((res) => {
                    console.log(res);
                    if (res.status !== 201) {
                        setMessage(
                            "Error adding superhero, please try another."
                        );
                        return;
                    } else {
                        setMessage("Superhero added successfully.");
                    }
                    return res.json();
                })
                .then((data) => {
                    setTimeout(() => {
                        setMessage("");
                    }, 5000);
                })
                .catch((err) => {
                    console.log(err.message);
                    setMessage(
                        "There was a problem in creating your superhero."
                    );
                    setTimeout(() => {
                        setMessage("");
                    }, 5000);
                });
            setInputText("");
            setDescription("");
            setActiveCheckbox(false);
            setIntelligenceCheckbox(0);
            setStrengthCheckbox(0);
            setSpeedCheckbox(0);
            setDurabilityCheckbox(0);
            setPowerCheckbox(0);
            setCombatCheckbox(0);
        } else {
            setMessage("Please enter a superhero.");
            setTimeout(() => {
                setMessage("");
            }, 5000);
        }
    }

    return (
        <form>
            <div>
                <input
                    placeholder="superhero name"
                    id="superhero-text"
                    value={inputText}
                    type="text"
                    className="superhero-text"
                    onChange={handleInput}
                />
            </div>
            <div>
                <input
                    placeholder="superhero description"
                    id="superhero-description"
                    value={description}
                    type="text"
                    className="superhero-description"
                    onChange={handleDescription}
                />
            </div>
            <div>
                <label htmlFor="active">Active </label>
                <input
                    type="checkbox"
                    name="active"
                    value="active"
                    onChange={handleActive}
                />
            
                {/* Add select component here */}
                <StatInput label={"Intelligence"} handleInput={handleIntelligence} />
                <StatInput label={"Strength"} handleInput={handleStrength} />
                <StatInput label={"Speed"} handleInput={handleSpeed} />
                <StatInput label={"Durability"} handleInput={handleDurability} />
                <StatInput label={"Power"} handleInput={handlePower} />
                <StatInput label={"Combat"} handleInput={handleCombat} />
                
                <br></br>
            </div>
            <button
                type="submit"
                className="superhero-button"
                onClick={handleSubmit}
            >
                Add a superhero
            </button>
            <p className="message">{message}</p>
        </form>
    );
}
