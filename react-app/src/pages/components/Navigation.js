import styles from "./css/Navigation.css";
import { useLocation, Link } from "react-router-dom";

const Navigation = (properties) => {
    let menuOpen = properties.state;

    // determines which page is active, so that "active" class can be added
    const location = useLocation();
    const isHomeActive = location.pathname === "/";
    const isRecipesActive = location.pathname.includes("/recipes");
    const isGalleryActive = location.pathname === "/gallery";
    const isAboutActive = location.pathname === "/about";
    
    return (
        <ul id="topnav-links" className= { menuOpen? "none" : "hidden"}>
            <li><Link to="/" className={isHomeActive?"active":"none"}>Home</Link></li>
            <li><Link to="/recipes" className={isRecipesActive?"active":"none"}>Recipes</Link></li>
            <li><Link to="/gallery" className={isGalleryActive?"active":"none"}>Gallery</Link></li>
            <li><Link to="/about" className={isAboutActive?"active":"none"}>About</Link></li>
        </ul>
    );
};

export default Navigation;