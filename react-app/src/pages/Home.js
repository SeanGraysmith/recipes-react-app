import { Link } from "react-router-dom";
import styles from "./css/Home.css";
import AttributeCard from "./components/AttributeCard";
import RecipeCard from "./components/RecipeCard";

import heroImage from "../images/hero-pic.png";

import burritoImage from "../images/breakfast-burrito.png";
import chickenBrocImage from "../images/cheese-chicken.png";
import buffaloChickenImage from "../images/buffalo_chicken.png";

import herbsBackground from "../images/herbs-etc.png";

import attributeFriendly from "../images/beginner-friendly.png";
import attributeBudget from "../images/budget-recipes.png";
import attributeQuick from "../images/time.png";
import attributeTested from "../images/tested.png";

import aboutBackground from "../images/about-browse-background.png";
import pastaGallery from "../images/pasta-gallery.png";

const Home = (props) => {
    return (
        <main>
                <div id="top-intro" className="tint-background" style={{ backgroundImage: `url(${heroImage})`}}>
                    <h1>Cheap, High-Quality Recipes for Busy College Students</h1>
                    <h3>Easy, budget friendly meals that anyone can cook</h3>
                    <Link to="/recipes"> <button className="action-button">Browse Recipes</button></Link>
                </div>
                <div id="popular-recipe-content">
                    <h1 id="popular-heading">Popular Recipes</h1>
                    <div id="popular-cards">

                        <RecipeCard imageLink={burritoImage} altText="breakfast burrito" 
                        recipeName="Breakfast Burritos" recipeTime="15 min" recipeCost="$1.50/Serving"/>

                        <RecipeCard imageLink={chickenBrocImage} altText="Cheesy chicken broccoli and rice" 
                        recipeName="Cheesy Chicken, Broccoli & Rice" recipeTime="30 min" recipeCost="$2.75/Serving"/>
                        
                        <RecipeCard imageLink={buffaloChickenImage} altText="buffalo chicken wrap" 
                        recipeName="Buffalo Chicken Wraps" recipeTime="15 min" recipeCost="$2.00/Serving"/>

                    </div>
                </div>
                <div id="why-love" className="tint-background" style={{ backgroundImage: `url(${herbsBackground})`}}>
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
                    <AttributeCard imageLink={attributeFriendly} altText="Beginner Friendly" displayText="Beginner-Friendly"/>

                    <AttributeCard imageLink={attributeBudget} altText="Budget Recipes" displayText="Budget Recipes"/>
        
                    <AttributeCard imageLink={attributeQuick} altText="30 Mins or Less" displayText="30 minutes or less"/>

                    <AttributeCard imageLink={attributeTested} altText="Time-Tested" displayText="Experience-tested"/>
                </div>
                
                <div id="about-browse" className="tint-background" style={{ backgroundImage: `url(${aboutBackground})`}}>
                    <div id="about-me">
                        <h1>About the Chef</h1>
                        <p>Hi, my name is Sean Graysmith, I am a university student who enjoys cooking cheap but high quality meals. Here I'll share my tips and tricks for others short on time and money.</p>
                    </div>

                    <div id="browse">
                        <h1>Browse My Recipe Gallery</h1>
                        <img src={pastaGallery} alt="pasta"/>
                        <Link to="/gallery"><button className="action-button">See Completed Dishes</button></Link>
                    </div>
                </div>
            </main>
    );
};

export default Home;