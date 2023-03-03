import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const PageWrapper = () => {
    const styles = ({ isActive }) => ({
        color: isActive ? "#2B061E" : "#875053",
    });
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>
                        Home
                    </NavLink>
                    <NavLink to="/superheros" style={styles}>
                        All superheros
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
            <footer>superhero Rankings 2022</footer>
        </>
    );
};

export default PageWrapper;
