import React, { useState, useEffect } from 'react';

import { SnackFilters, SnackCard } from '../../components';

const SnacksPage = () => {

    const [snacks, setSnacks] = useState([]);
    const [healthyOnly, setHealthyOnly] = useState(false);
    const [vegetarianOnly, setVegetarianOnly] = useState(false);
    const [textFilter, setTextFilter] = useState("");
    const [loading, setLoading] = useState(false);

    async function vote(id, value) {
        const options = {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },    
            body: JSON.stringify({
                votes: value,
            })
        }
        const response = await fetch(`http://localhost:3000/snacks/${id}`, options);
        if (response.status === 200) {
            const data = await response.json();
            setSnacks(snacks.map(s => s.id == data.id ? { ...s, votes: data.votes } : s))
        }
        
    }

    async function deleteSnack(id) {
        try {
            const options = {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' }
            }
            const response = await fetch(`http://localhost:3000/snacks/${id}`, options);
            if (response.status === 204) {
                const updatedSnacks = [...snacks].filter(s => s.id !== id)
                setSnacks(updatedSnacks)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        setLoading(true)
        async function loadSnacks() {
            const response = await fetch("http://localhost:3000/snacks");
            if (response.status === 200) {
                const data = await response.json();
                setSnacks(data);
                setLoading(false)
            }
        };
        
        loadSnacks();
    }, [])

    function displaySnacks() {
        return snacks
                .filter(s => !vegetarianOnly || s.vegetarian)
                .filter(s => !healthyOnly || s.healthy)
                .filter(s => textFilter.length == 0 || s.name.toLowerCase().includes(textFilter.toLowerCase()))
                .map(s => <SnackCard key={s.id} id={s.id} name={s.name}
                            vegetarian={s.vegetarian} healthy={s.healthy}
                            votes={s.votes} vote={vote} deleteSnack={deleteSnack} />)
    }

    return (
        <main className="snack-main">
            <h1>Snacks</h1>
            <SnackFilters healthyOnly={healthyOnly} vegetarianOnly={vegetarianOnly} textFilter={textFilter}
                setHealthyOnly={setHealthyOnly} setVegetarianOnly={setVegetarianOnly} setTextFilter={setTextFilter}
            />
            <div className="snack-holder">
                { loading ? (
                    <h2>Loading...</h2>
                ) : (
                    displaySnacks()
                )
                }
            </div>
        </main>
    )
};

export default SnacksPage;