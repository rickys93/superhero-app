import React from "react";

const superheroFilters = (props) => {
    function setHealthy() {
        const healthyOnly = !props.healthyOnly;
        props.setHealthyOnly(healthyOnly);
    }

    function setVegetarian() {
        const vegetarianOnly = !props.vegetarianOnly;
        props.setVegetarianOnly(vegetarianOnly);
    }

    function updateTextFilter(e) {
        props.setTextFilter(e.target.value);
    }

    return (
        <div className="superhero-filters">
            <label>
                Healthy:
                <input
                    type="checkbox"
                    checked={props.healthyOnly}
                    onChange={setHealthy}
                ></input>
            </label>
            <label>
                Vegetarian:
                <input
                    type="checkbox"
                    checked={props.vegetarianOnly}
                    onChange={setVegetarian}
                ></input>
            </label>
            <label>
                Search:
                <input
                    type="text"
                    value={props.textFilter}
                    onChange={updateTextFilter}
                />
            </label>
        </div>
    );
};

export default superheroFilters;
