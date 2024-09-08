import { useNavigate } from "react-router-dom";

import "./Recipe.css"

function Recipe({ id, title, likes }) {

    const navigate = useNavigate();

    return (
        <button className="recipe" onClick={() => navigate(`/recipe/${id}`)}>
            <h3>{title}</h3>
            <p>{likes}</p>
        </button>
    );

}

export default Recipe;
