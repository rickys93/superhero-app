import React from "react";

const SuperheroFilters = (props) => {
    function setActive() {
        const activeOnly = !props.activeOnly;
        props.setActiveOnly(activeOnly);
    }

    function updateTextFilter(e) {
        props.setTextFilter(e.target.value);
    }

    return (
        <div className="superhero-filters">
            <label>
                Active:
                <input
                    type="checkbox"
                    checked={props.activeOnly}
                    onChange={setActive}
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

export default SuperheroFilters;
