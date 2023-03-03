import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const PageWrapper = () => {
    const styles = ({ isActive }) => ({
        color: isActive ? "#ffffff" : "#99b2f5",
    });
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>
                        Home
                    </NavLink>
                    <NavLink to="/superheroes" style={styles}>
                        All superheroes
                    </NavLink>
                    <NavLink to="/best" style={styles}>
                        Best superhero ever
                    </NavLink>
                    <NavLink to="/add" style={styles}>
                        Add your favorite superhero
                    </NavLink>
                </nav>
            </header>
            <Outlet />
            <footer>Superhero Rankings 2022</footer>
        </>
    );
};

export default PageWrapper;
