import styles from "./css/GallerySection.css";
import {useState} from "react";
const GallerySection = (properties) => {
    const[currentIndex, setCurrentIndex] = useState(0);

    // only attempt to use if they are loaded
    const loadedSrcs = properties.imageSrcs ?? [];

    const forward = () => {
        setCurrentIndex(currentIndex==loadedSrcs.length-1?0:currentIndex+1);
    };

    const backward = () => {
        setCurrentIndex(currentIndex==0?loadedSrcs.length-1:currentIndex-1);
    };

    return (
        <section className="gallery-section">
            <button className="action-button prev-button" onClick={backward}> &lt; </button>
            <div className="gallery-images">
                <img src={loadedSrcs[currentIndex]} />
            </div>
            <button className="action-button next-button" onClick={forward}> &gt; </button>
        </section>
    );
};

export default GallerySection;