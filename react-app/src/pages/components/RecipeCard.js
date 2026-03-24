import styles from "./css/RecipeCard.css";

const RecipeCard = (properties) => {
    return (
        <section className="recipe-card">
            <img src={properties.imageLink} alt={properties.altText}/>
            <h3>{properties.recipeName}</h3>
            <ul>
                <li>{properties.recipeTime}</li>
                <li>{properties.recipeCost}</li>
            </ul>
        </section>
    );
};

export default RecipeCard;