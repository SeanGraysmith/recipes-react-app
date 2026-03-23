import { Link } from "react-router-dom";
import styles from "./Gallery.css";
import GallerySection from "./components/GallerySection";


import galleryBackground from "../images/gallery-background.png";

import tacoImage from "../images/gallery/tacos.png";
import garlicPastaImage from "../images/gallery/garlic-pasta.png";
import slidersImage from "../images/gallery/bbq-chicken.png";
import buffaloChickenImage from "../images/gallery/buffalo_chicken.png";

import ravioliImage from "../images/gallery/ravioli.png";
import stuffedPepperImage from "../images/gallery/stuffed-bell-pepper.png";
import chickenFajitasImage from "../images/gallery/chicken-fajitas.png";
import breakfastBurritoImage from "../images/gallery/breakfast-burrito.png";

import bunImage from "../images/gallery/Bun_bo.png";
import pizzaImage from "../images/gallery/hawaiian-pizza.png";
import tomatoPastaImage from "../images/gallery/tomato-pasta.png";
import seafoodPastaImage from "../images/gallery/garlic-shrimp-pasta.png";

import banhImage from "../images/gallery/banh-mi.png";
import shepherdsPieImage from "../images/gallery/shepherds_pie.png";
import steakImage from "../images/gallery/steak.png";
import bakedPastaImage from "../images/gallery/rigatoni.png"

const Gallery = (props) => { 
    return (
        <main id="gallery-page" style={{ backgroundImage: `url(${galleryBackground})`}}>
            <div id="gallery">                                              
                <GallerySection imageOneLink= {tacoImage} imageOneAlt="tacos"
                                imageTwoLink={garlicPastaImage} imageTwoAlt="pasta"
                                imageThreeLink={slidersImage} imageThreeAlt="sliders"
                                imageFourLink={buffaloChickenImage} imageFourAlt="buffalo chicken" />
                {/*By Larry Miller - Flickr: Tinos Tacos, Roseburg, Ore., CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=32052457 */}
                
                <GallerySection imageOneLink={ravioliImage} imageOneAlt="ravioli"
                                imageTwoLink={stuffedPepperImage} imageTwoAlt="stuffed bell peppers"
                                imageThreeLink={chickenFajitasImage} imageThreeAlt="chicken fajitas"
                                imageFourLink={breakfastBurritoImage} imageFourAlt="breakfast burrito" />
                { /* cyclonebill, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons */}

                <GallerySection imageOneLink={bunImage} imageOneAlt="bun bo"
                                imageTwoLink={pizzaImage} imageTwoAlt="hawaiian pizza"
                                imageThreeLink={tomatoPastaImage} imageThreeAlt="pasta"
                                imageFourLink={seafoodPastaImage} imageFourAlt="seafood pasta" />
                {/* By Alpha from Melbourne, Australia - Bún Bò Huê - Dakao Hoang AUD8.50, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=35224100 */}
                {/*By Janine from Mililani, Hawaii, United States - do you like...pineapple?Uploaded by Fæ, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=23234231 */}
                
                <GallerySection imageOneLink={banhImage} imageOneAlt="banh mi"
                                imageTwoLink={shepherdsPieImage} imageTwoAlt="shepherds pie"
                                imageThreeLink={steakImage} imageThreeAlt="steak"
                                imageFourLink={bakedPastaImage} imageFourAlt="baked pasta" />
                { /*By Nsaum75 at English Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=10402415*/}
                {/*By Oxfordian Kissuth, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons*/}
            </div>
        </main>
    );
};
export default Gallery;