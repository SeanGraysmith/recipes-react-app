import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Layout from "./pages/Layout";
import TomatoPastaRecipe from "./pages/TomatoPastaRecipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const MySite = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Recipes" element={<Recipes />} />
                    <Route path="Gallery" element={<Gallery />} />
                    <Route path="About" element={<About />} />
                    <Route path="TomatoPastaRecipe" element={<TomatoPastaRecipe />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <MySite />
);