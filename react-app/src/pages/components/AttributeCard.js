import styles from "./css/AttributeCard.css";
const AttributeCard = (properties) => {
    return (
        <section className="attribute-card">
            <img src={properties.imageLink} alt={properties.altText}/>
            <h3>{properties.displayText}</h3>
        </section>
    );
};

export default AttributeCard;