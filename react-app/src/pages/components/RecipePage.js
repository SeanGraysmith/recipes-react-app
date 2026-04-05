import styles from "./css/RecipePage.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const RecipePage = (props) => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const loadRecipe = async() => {
            const res = await axios.get(`https://demo-backend-77py.onrender.com/api/recipes/${id}`);
            setRecipe(res.data);
        };

        loadRecipe();
    }, [id]);

    // instead of ternary, im going to check if the page is loaded with an if
    if (!recipe) {
        return <p>Loading...</p>
    }
    return (
        <main className="recipe-page">
            <h1>{recipe["title"]}</h1>
            <div className="recipe-intro">
                <div className="recipe-picture">
                    <img src={`https://demo-backend-77py.onrender.com/images/${recipe["img"]}`} alt={recipe["title"]}/>
                    <div className="recipe-attributes">
                        <p>{recipe["time"]} minutes</p>
                        <p>${recipe["cost"]}/Serving</p>
                    </div>
                </div>

                <h3>{recipe["description"]}</h3>
            </div>

            <div className="recipe-instructions-container">
                <iframe id="left-iframe" className="calc-iframe" src="https://www.calculatorsoup.com/calculators/conversions/cooking.php?given_data=liquid&input=ounce+%28U.S.+fluid%29&output=cup+%28U.S.%29&input_value=8&last=liquid&action=solve"></iframe>
                <div className="ingredients-extras">
                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe["ingredients"].map ((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <iframe id="between-iframe" className="calc-iframe" src="https://www.calculatorsoup.com/calculators/conversions/cooking.php?given_data=liquid&input=ounce+%28U.S.+fluid%29&output=cup+%28U.S.%29&input_value=8&last=liquid&action=solve"></iframe>
                    <div className="extras">
                        <h2>Extras & Toppings</h2>
                        <ul>
                            {recipe["extras"].map ((extra, i) => (
                                <li key={i}>{extra}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="instructions">
                    <h2>Instructions</h2>
                    <ol>
                        {recipe["instructions"].map ((group, i) => (
                            <div key={i}> 
                                <h3>{i+1}. {group.title}</h3>
                                <p>{group.step}</p>
                            </div>
                        ))}
                    </ol>
                </div>
            </div>
        </main>
    );
};

export default RecipePage;