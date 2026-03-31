import styles from "./css/RecipeListCard.css";
import {Link} from "react-router-dom";
const RecipeListCard = (properties) => {
    return (
        <section className="recipe-list-card">
            <img src={properties.imageLink} alt={properties.altText}/>
            <h3>{properties.recipeName}</h3>
            <div className="recipe-list-attributes">
                <p>{properties.recipeCost}</p>
                <p>{properties.recipeTime}</p>
            </div>
            <Link to={properties.recipePath}><button className="action-button">View Recipe</button></Link>
        </section>
    );
};

export default RecipeListCard;