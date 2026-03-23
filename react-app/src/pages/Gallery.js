import { Link } from "react-router-dom";
import styles from "./Gallery.css";
import GallerySection from "./components/GallerySection";
const Gallery = (props) => { 
    return (
        <main id="gallery-page" style={{ backgroundImage: "url('/images/gallery-background.png')"}}>
            <div id="gallery">                                              
                <GallerySection imageOneLink="images/gallery/tacos.png" imageOneAlt="tacos"
                                imageTwoLink="images/gallery/garlic-pasta.png" imageTwoAlt="pasta"
                                imageThreeLink="images/gallery/bbq-chicken.png" imageThreeAlt="sliders"
                                imageFourLink="images/gallery/buffalo_chicken.png" imageFourAlt="buffalo chicken" />
                {/*By Larry Miller - Flickr: Tinos Tacos, Roseburg, Ore., CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=32052457 */}
                
                <GallerySection imageOneLink="images/gallery/ravioli.png" imageOneAlt="ravioli"
                                imageTwoLink="images/gallery/stuffed-bell-pepper.png" imageTwoAlt="stuffed bell peppers"
                                imageThreeLink="images/gallery/chicken-fajitas.png" imageThreeAlt="chicken fajitas"
                                imageFourLink="images/gallery/breakfast-burrito.png" imageFourAlt="breakfast burrito" />
                { /* cyclonebill, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons */}

                <GallerySection imageOneLink="images/gallery/Bun_bo.png" imageOneAlt="bun bo"
                                imageTwoLink="images/gallery/hawaiian-pizza.png" imageTwoAlt="hawaiian pizza"
                                imageThreeLink="images/gallery/tomato-pasta.png" imageThreeAlt="pasta"
                                imageFourLink="images/gallery/garlic-shrimp-pasta.png" imageFourAlt="seafood pasta" />
                {/* By Alpha from Melbourne, Australia - Bún Bò Huê - Dakao Hoang AUD8.50, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=35224100 */}
                {/*By Janine from Mililani, Hawaii, United States - do you like...pineapple?Uploaded by Fæ, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=23234231 */}
                
                <GallerySection imageOneLink="images/gallery/banh-mi.png" imageOneAlt="banh mi"
                                imageTwoLink="images/gallery/shepherds_pie.png" imageTwoAlt="shepherds pie"
                                imageThreeLink="images/gallery/steak.png" imageThreeAlt="steak"
                                imageFourLink="images/gallery/rigatoni.png" imageFourAlt="baked pasta" />
                { /*By Nsaum75 at English Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=10402415*/}
                {/*By Oxfordian Kissuth, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons*/}
            </div>
        </main>
    );
};
export default Gallery;