import styles from "./css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import logo from "../../images/logo.png";
import Navigation from "./Navigation"

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    // I had a weird infinite rendering issue with my form, and useEffect is preventative to these, so i implement
    useEffect(() => {
        const resized = () => {
            setMenuOpen(window.innerWidth>=768);
        }

        resized();
        window.addEventListener("resize", resized);

        return () => window.removeEventListener("resize",resized);
    }, []);

    // send the user to a random recipe page, called in the onClick of the random button
    const navigate = useNavigate();
    const randomRecipe = () => {
        const randomNum = Math.floor(Math.random() * 8 + 1);
 
        navigate(`recipes/${randomNum}`);
    };

    return (
        <header>
                <nav id="topnav">
                    <img src={logo} alt="Sean's Recipes Logo"/>

                    <div id="hamburger-toggle" onClick={toggleMenu}>
                        <section></section>
                        <section></section>
                        <section></section>
                    </div>

                    <Navigation state={menuOpen}/>

                    <button className="action-button" onClick={randomRecipe}>Random Recipe</button>
                </nav>
            </header>
    );
};
export default Header;