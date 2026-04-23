import {useState, useRef} from "react";
import style from "./css/CommentForm.css";
import {Link} from "react-router-dom"

const CommentForm = (properties) => {
    const [prevImage, setPrevImage] = useState("");
    const imageRef = useRef(null);

    const imageUploaded = (e) => {
        const file = e.target.files?.[0]; // guarding against empty upload
        if (!file) { return; }
        if (prevImage) { URL.revokeObjectURL(prevImage); }
        setPrevImage(URL.createObjectURL(file));
    };

    const handleImageClear = (e) => {
        e.preventDefault();
        if (prevImage) { URL.revokeObjectURL(prevImage); }
        setPrevImage("");
        if (imageRef.current) { imageRef.current.value = ""; }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        properties.setFeedback("Posting comment...");
        const formData = new FormData(e.target);

        const response = await fetch(`https://demo-backend-77py.onrender.com/api/recipes/${properties.id}`, {
            method: "POST",
            body:formData,
        });

        if (response.status === 200) {
            const newComment = await response.json();
            properties.onCommentAdded(newComment);
            properties.setFeedback("Comment added!");
            setPrevImage("");
            e.target.reset();
        } else {
            const error = await response.text();
            properties.setFeedback(error);
        }
    }

    return (
        <form id="comment-form" onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input placeholder="type your name here" type="text" name="name" id="name" autoComplete="name" required/>
            </div>

            <div>
                <label htmlFor="body">Comment Content:</label>
                <textarea placeholder="type your comment here" type="text" name="body" id="body" autoComplete="off" required/>
            </div>


            <div id="image-upload">
                <label htmlFor="img">Select Image</label>
                <input ref={imageRef} type="file" id="img" name="img" accept="image/*" onChange={imageUploaded}></input>

                <Link to="#" id="clear-link" onClick={handleImageClear}>Clear Image</Link>

                <p id="img-preview-area">
                    {prevImage==""?(""):(<img id="preview-image" src={prevImage} />)}
                </p>
            </div>
            <p><button className="action-button" type="submit">Submit</button></p>
        </form>
    )
}

export default CommentForm;