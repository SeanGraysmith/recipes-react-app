import { Link } from "react-router-dom";
import styles from "./css/Recipes.css";
import RecipeListCard from "./components/RecipeListCard"

import tomatoPastaImage from "../images/recipes/tomato-pasta.png";
import tacosImage from "../images/recipes/tacos.png";
import bunImage from "../images/recipes/Bun_bo.png";
import banhImage from "../images/recipes/banh-mi.png";
import stuffedPepperImage from "../images/recipes/stuffed-bell-pepper.png";
import ravioliImage from "../images/recipes/ravioli.png";

const Recipes = (props) => {
    return (
        <main id="recipes-page">
            <h1>Browse All Recipes</h1>

            <div id="recipes-filter-buttons">
                <button className="action-button">All</button>
                <button className="action-button inactive-button">Beginner</button>
                <button className="action-button inactive-button">Budget</button>
                <button className="action-button inactive-button">Quick</button>
            </div>

            <div id="recipes-list">
                <div className="column">
                    <RecipeListCard imageLink={tomatoPastaImage} altText="Tomato Sauce Pasta" recipeName="Tomato Sauce Pasta" 
                    recipeCost="$1.5/Serving" recipeTime="20 minutes" />

                    <RecipeListCard imageLink={tacosImage} altText="Tacos" recipeName="Tacos" 
                    recipeCost="$1.5/Serving" recipeTime="25 minutes" />
                </div>

                <div className="column">
                    <RecipeListCard imageLink={bunImage} altText="Bún bò Huế" recipeName="Bún bò Huế" 
                    recipeCost="$3/Serving" recipeTime="60 minutes" />

                    <RecipeListCard imageLink={banhImage} altText="Bánh mì" recipeName="Bánh mì" 
                    recipeCost="$2/Serving" recipeTime="15 minutes" />
                </div>

                <div className="column">
                    <RecipeListCard imageLink={stuffedPepperImage} altText="Stuffed Bell Peppers" recipeName="Stuffed Bell Peppers" 
                    recipeCost="$2.25/Serving" recipeTime="35 minutes" />

                    <RecipeListCard imageLink={ravioliImage} altText="Ravioli" recipeName="Ravioli" 
                    recipeCost="$2/Serving" recipeTime="30 minutes" />
                </div>
            </div>

            <div id="recipes-page-selector">
                <h4 id="recipes-pagenum-header">Showing page 1 of 2</h4>
                <div id="page-number-buttons"></div>
            </div>

            <div id="recipes-cant-find">
                <h2>Can't find what you want?</h2>
                <div id="gallery-or-sort">
                    <div id="gallery-or-choice-one">
                        <h4>Take a look at the picture gallery</h4>
                        <Link to="/gallery"><button className="action-button">See Completed Dishes</button></Link>
                    </div>

                    <div id="gallery-or-choice-two">
                        <h4>OR</h4>
                        <h4>Try sorting by category!</h4>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Recipes;