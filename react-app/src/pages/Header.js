import styles from "./css/Header.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import logo from "../images/logo.png";

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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

                    <ul id="topnav-links">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>

                    <Link to="/TomatoPastaRecipe"c><button className="action-button">Random Recipe</button></Link>
                </nav>
            </header>
    );
};
export default Header;