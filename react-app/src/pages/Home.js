import { Link } from "react-router-dom";
import styles from "./Home.css";
import AttributeCard from "./components/AttributeCard";
import RecipeCard from "./components/RecipeCard";
const Home = (props) => {
    return (
        <main>
                <div id="top-intro" className="tint-background" style={{ backgroundImage: "url('/images/hero-pic.png')"}}>
                    <h1>Cheap, High-Quality Recipes for Busy College Students</h1>
                    <h3>Easy, budget friendly meals that anyone can cook</h3>
                    <Link to="/recipes"> <button className="action-button">Browse Recipes</button></Link>
                </div>
                <div id="popular-recipe-content">
                    <h1 id="popular-heading">Popular Recipes</h1>
                    <div id="popular-cards">

                        <RecipeCard imageLink="/images/breakfast-burrito.png" altText="breakfast burrito" 
                        recipeName="Breakfast Burritos" recipeTime="15 min" recipeCost="$1.50/Serving"/>

                        <RecipeCard imageLink="/images/cheese-chicken.png" altText="Cheesy chicken broccoli and rice" 
                        recipeName="Cheesy Chicken, Broccoli & Rice" recipeTime="30 min" recipeCost="$2.75/Serving"/>
                        
                        <RecipeCard imageLink="/images/buffalo_chicken.png" altText="buffalo chicken wrap" 
                        recipeName="Buffalo Chicken Wraps" recipeTime="15 min" recipeCost="$2.00/Serving"/>

                    </div>
                </div>
                <div id="why-love" className="tint-background" style={{ backgroundImage: "url('/images/herbs-etc.png')"}}>
                    <div id="why-content">
                        <h1>Why you'll love these recipes</h1>
                        <ul>
                            <li>My recipes are budget friendly, delicious, and fun to make.</li>
                            <li>Every recipe is designed beginner friendly.</li>
                            <li>They're perfect for at-home chefs who are short on time.</li>
                        </ul>
                    </div>
                </div>
                

                <div id="attribute-cards">
                    <AttributeCard imageLink="/images/beginner-friendly.png" altText="Beginner Friendly" displayText="Beginner-Friendly"/>

                    <AttributeCard imageLink="/images/budget-recipes.png" altText="Budget Recipes" displayText="Budget Recipes"/>
        
                    <AttributeCard imageLink="/images/time.png" altText="30 Mins or Less" displayText="30 minutes or less"/>

                    <AttributeCard imageLink="/images/tested.png" altText="Time-Tested" displayText="Experience-tested"/>
                </div>
                
                <div id="about-browse" className="tint-background" style={{ backgroundImage: "url('/images/about-browse-background.png')"}}>
                    <div id="about-me">
                        <h1>About the Chef</h1>
                        <p>Hi, my name is Sean Graysmith, I am a university student who enjoys cooking cheap but high quality meals. Here I'll share my tips and tricks for others short on time and money.</p>
                    </div>

                    <div id="browse">
                        <h1>Browse My Recipe Gallery</h1>
                        <img src="/images/pasta-gallery.png" alt="pasta"/>
                        <Link to="/gallery"><button className="action-button">See Completed Dishes</button></Link>
                    </div>
                </div>
            </main>
    );
};

export default Home;