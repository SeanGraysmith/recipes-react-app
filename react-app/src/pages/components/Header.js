import styles from "./css/Header.css";
import { Link } from "react-router-dom";
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

                    <Link to="/TomatoPastaRecipe"><button className="action-button">Random Recipe</button></Link>
                </nav>
            </header>
    );
};
export default Header;