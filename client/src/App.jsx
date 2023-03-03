import React from "react";
import { Routes, Route } from "react-router-dom";

import {
    HomePage,
    superheroesPage,
    superheroPage,
    BestsuperheroPage,
    AddsuperheroPage,
    NotFoundPage,
} from "./pages";
import { PageWrapper } from "./components";

import "./assets/app.css";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PageWrapper />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/superheroes" element={<superheroesPage />} />
                    <Route path="/superheroes/:id" element={<superheroPage />} />
                    <Route path="/best" element={<BestsuperheroPage />} />
                    <Route path="/add" element={<AddsuperheroPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
