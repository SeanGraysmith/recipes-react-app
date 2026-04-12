import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import styles from "./css/Recipes.css";
import RecipeListCard from "./components/RecipeListCard"

const Recipes = (props) => {
    // load recipes after page loads
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const loadRecipes = async() => {
            const res = await axios.get("https://demo-backend-77py.onrender.com/api/recipes");
            setRecipes(res.data);
        };

        loadRecipes();
    },[]);

    // break array into groups of 2 (A,B,C,D,E) becomes ((A,B), (C,D), (E))
    // this function is modified/influenced by the following source:
    // https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/js/s/split-array-into-chunks.md
     // note that the dynamic page number button generation also uses this logic
    const groupArray = (array) => {
        // creates a new array of size length of array / 2, rounded
        // then slices the original array by index to populate the new array
        return Array.from({ length: Math.ceil(array.length / 2)}, (_, i) => array.slice(i*2, i*2+2));
    };

    // dynamic page number selection logic
    // limits shown columns to 3
    const COLUMNS_PER_PAGE = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(groupArray(recipes).length / COLUMNS_PER_PAGE);
    const allColumns = groupArray(recipes);

    // gets only columns needed for current page
    const visibleColumns = allColumns.slice((currentPage - 1) * COLUMNS_PER_PAGE, currentPage * COLUMNS_PER_PAGE);

    return (
        <main id="recipes-page">
            <div id="recipes-header">
                <h1>Browse All Recipes</h1>
            </div>
            

            <div id="recipes-filter-buttons">
                <button className="action-button">All</button>
                <button className="action-button inactive-button">Beginner</button>
                <button className="action-button inactive-button">Budget</button>
                <button className="action-button inactive-button">Quick</button>
            </div>

            <div id="recipes-list">
                {visibleColumns.map((group, index) => (
                    <div className="column" key={index}>
                        {group.map((recipe) => (
                            <RecipeListCard key={recipe["id"]} id={recipe["id"]} imageLink={recipe["img"]} altText={recipe["title"]} recipeName={recipe["title"]} 
                            recipeCost={recipe["cost"]} recipeTime={recipe["time"]} recipePath={recipe["page-link"]} />
                        ))}
                    </div>
                ))}
            </div>

            <div id="recipes-page-selector">
                <h4 id="recipes-pagenum-header">Showing page {currentPage} of {totalPages}</h4>

                <div id="page-number-buttons">
                    {Array.from({ length: totalPages }, (_, i) => i+1).map((page) => (
                        <button key={page} className={`action-button ${page !== currentPage ? "inactive-button" : ""}`} onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    ))}
                </div>
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