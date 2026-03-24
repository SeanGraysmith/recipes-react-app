import styles from "./css/Question.css";
const Question = (properties) => {
    return (
        <div className="question">
            <p>{properties.questionQ}</p>
            <p>{properties.questionA}</p>
        </div>
    );
};

export default Question;