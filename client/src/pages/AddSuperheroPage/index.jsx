import React, { useState } from "react";
import { SuperheroForm } from "../../components";

export default function AddSuperheroPage() {
    const [inputText, setInputText] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [active, setActiveCheckbox] = useState(false);
    const [intelligence, setIntelligenceCheckbox] = useState(0);
    const [strength, setStrengthCheckbox] = useState(0);
    const [speed, setSpeedCheckbox] = useState(0);
    const [durability, setDurabilityCheckbox] = useState(0);
    const [power, setPowerCheckbox] = useState(0);
    const [combat, setCombatCheckbox] = useState(0);

    return (
        <main>
            <h2>Add your favorite superhero:</h2>
            <SuperheroForm
                inputText={inputText}
                setInputText={setInputText}
                description={description}
                setDescription={setDescription}
                message={message}
                setMessage={setMessage}
                active={active}
                setActiveCheckbox={setActiveCheckbox}

                intelligence={intelligence}
                setIntelligenceCheckbox={setIntelligenceCheckbox}
                strength={strength}
                setStrengthCheckbox={setStrengthCheckbox}
                speed={speed}
                setSpeedCheckbox={setSpeedCheckbox}
                durability={durability}
                setDurabilityCheckbox={setDurabilityCheckbox}
                power={power}
                setPowerCheckbox={setPowerCheckbox}
                combat={combat}
                setCombatCheckbox={setCombatCheckbox}
            />
        </main>
    );
};
