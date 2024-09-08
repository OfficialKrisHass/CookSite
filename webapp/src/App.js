import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecipeList from './RecipeList.js';
import RecipePage from './RecipePage.js';

function App() {

    const[recipes, setRecipes] = useState([]);

    useEffect(() => {

        fetch("/api/recipes/").then(res => res.json())
        .then(res => {
            setRecipes(res.items);
        });

    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <RecipeList recipes={recipes}/> }/>
                    <Route path="/recipe/:id" element={ <RecipePage recipes={recipes}/> }/>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;
