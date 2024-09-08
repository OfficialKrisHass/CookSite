import Recipe from "./Recipe.js";

import "./RecipeList.css"

function RecipeList({ recipes }) {

    return (
        <div className="recipe-list">
            {recipes.map(recipe =>
                <Recipe key={recipe.title} id={recipe.id} title={recipe.title} likes={recipe.likes}/>
            )}
        </div>
    );

}

export default RecipeList;
