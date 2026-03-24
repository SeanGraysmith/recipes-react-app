import styles from "./css/GallerySection.css";
const GallerySection = (properties) => {
    return (
        <section className="gallery-section">
            <button className="action-button prev-button"> &lt; </button>
            <div className="gallery-images">
                <img src={properties.imageOneLink} alt={properties.imageOneAlt}/> 
                <img src={properties.imageTwoLink} alt={properties.imageTwoAlt} className="hidden"/>
                <img src={properties.imageThreeLink} alt={properties.imageThreeAlt} className="hidden"/>
                <img src={properties.imageFourLink} alt={properties.imageFourAlt} className="hidden"/>
            </div>
            <button className="action-button next-button"> &gt; </button>
        </section>
    );
};

export default GallerySection;