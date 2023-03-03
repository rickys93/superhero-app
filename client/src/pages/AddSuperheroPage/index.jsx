import React, { useState } from "react";
import { SuperheroForm } from "../../components";

export default function AddSuperheroPage() {
    const [inputText, setInputText] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [active, setActiveCheckbox] = useState(false);

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
            />
        </main>
    );
};
