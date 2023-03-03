import React from 'react'

export default function SnackForm({inputText, setInputText, description, setDescription, message, setMessage, vegetarian, setVegetarianCheckbox, healthy, setHealthyCheckbox}) {
    function handleInput(e) {
        setInputText(e.target.value)
    }
    
    function handleDescription(e) {
        setDescription(e.target.value)
    }

    function handleVegetarian() {
        setVegetarianCheckbox(!vegetarian)
    }

    function handleHealthy() {
        setHealthyCheckbox(!healthy)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (inputText.length > 0 && description.length > 0) {
            fetch('http://localhost:3000/snacks', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        snack_name: inputText, 
                        snack_description: description, 
                        healthy: healthy, 
                        vegetarian: vegetarian
                    }
                ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((res) => {
                console.log(res)
                if (res.status !== 201) {
                    setMessage('Error adding snack, please try another.');
                    return
                } else {
                    setMessage('Snack added successfully.');
                }
                return res.json()
            })
            .then((data) => {

                setTimeout(() => {
                    setMessage('')
                }, 5000)
            })
            .catch((err) => {
                console.log(err.message);
                setMessage('There was a problem in creating your snack.');
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            });
            setInputText('')
            setDescription('')
        } else {
            setMessage('Please enter a snack.');
            setTimeout(() => {
                setMessage('')
            }, 5000)
        }
    }

    return(
        <form>
            <div>
                <input placeholder="Snack name" id="snack-text" value={inputText} type="text" className="snack-text" onChange={handleInput}/>
            </div>
            <div>
                <input placeholder="Snack description" id="snack-description" value={description} type="text" className="snack-description" onChange={handleDescription}/>
            </div>
            <div>
                <input type="checkbox" name="healthy" value="healthy" onChange={handleHealthy}/>
                <label htmlFor="healthy">Healthy</label>
                <input type="checkbox" name="vegetarian" value="vegetarian" onChange={handleVegetarian}/>
                <label htmlFor="vegetarian">Vegetarian</label><br></br>
            </div>
            <button type="submit" className="snack-button" onClick={handleSubmit}>Add a snack</button>
            <p className='message'>{message}</p>
        </form>
    )
}
