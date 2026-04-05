import styles from "./css/RecipeListCard.css";
import {Link} from "react-router-dom";
const RecipeListCard = (properties) => {
    return (
        <section className="recipe-list-card">
            <img src={`https://demo-backend-77py.onrender.com/images/${properties.imageLink}`} alt={properties.altText}/>
            <h3>{properties.recipeName}</h3>
            <div className="recipe-list-attributes">
                <p>${properties.recipeCost}/Serving</p>
                <p>{properties.recipeTime} minutes</p>
            </div>
            <Link to={`/recipes/${properties.id}`}><button className="action-button">View Recipe</button></Link>
        </section>
    );
};

export default RecipeListCard;