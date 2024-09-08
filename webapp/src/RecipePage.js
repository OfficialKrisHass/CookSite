import { useParams } from "react-router-dom"

function RecipePage({ recipes }) {

    const { id } = useParams();
    console.log(recipes[id - 1]);

    return (
        <div className="recipe-page">
            <p>displaying recipe with name {recipes[id - 1].title}</p>
        </div>
    )

}

export default RecipePage;
