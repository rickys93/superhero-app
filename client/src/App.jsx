import React from "react";
import { Routes, Route } from "react-router-dom";

import {
    HomePage,
    SuperherosPage,
    SuperheroPage,
    BestSuperheroPage,
    AddSuperheroPage,
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
                    <Route path="/superheros" element={<SuperherosPage />} />
                    <Route path="/superheros/:id" element={<SuperheroPage />} />
                    <Route path="/best" element={<BestSuperheroPage />} />
                    <Route path="/add" element={<AddSuperheroPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
