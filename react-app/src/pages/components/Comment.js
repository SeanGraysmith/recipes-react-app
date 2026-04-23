import { useState, useRef } from "react";
import styles from "./css/Comment.css";
import {Link} from "react-router-dom";
const BACKEND_URL = "https://demo-backend-77py.onrender.com";

const Comment = (properties) => {
    const [isEditing, setIsEditing] = useState(false);
    // loads existing image if needed
    const [prevImage, setPrevImage] = useState(properties.comment.image ? `${BACKEND_URL}/${properties.comment.image}` : "");
    const [uploadedNewImage, setUploadedNewImage] = useState(false);
    const imageRef = useRef(null);

    const imageUploaded = (e) => {
        const file = e.target.files?.[0]; // guarding against empty upload
        if (!file) { return; }
        if (uploadedNewImage) URL.revokeObjectURL(prevImage);
        setPrevImage(URL.createObjectURL(file));
        setUploadedNewImage(true);
    };

    const handleImageClear = (e) => {
        e.preventDefault();
        if (uploadedNewImage) { URL.revokeObjectURL(prevImage); }
        setPrevImage("");
        setUploadedNewImage(false);
        if (imageRef.current) { imageRef.current.value = ""; }
    };

    const handleCancel = () => {
        if (uploadedNewImage) { URL.revokeObjectURL(prevImage); }
        setPrevImage(properties.comment.image ? `${BACKEND_URL}/${properties.comment.image}` : "");
        setUploadedNewImage(false);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        const response = await fetch(`${BACKEND_URL}/api/recipes/${properties.recipeId}/comments/${properties.commentId}`,  {
            method: "DELETE"
        });

        if (response.status === 200) {
            properties.onDelete(properties.commentId);
            properties.setFeedback("Comment Deleted.");
        } else {
            const error = await response.text();
            properties.setFeedback(error);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // adds content that tells backend to remove the image
        if (!prevImage) {
            formData.append("removeImage", "true");
        }

        const response = await fetch(`${BACKEND_URL}/api/recipes/${properties.recipeId}/comments/${properties.commentId}`, {
            method: "PUT",
            body: formData,
        });

        if (response.status === 200) {
            const data = await response.json();
            properties.onEdit(properties.commentId, data);
            properties.setFeedback("Comment edited.");
            if (uploadedNewImage) { URL.revokeObjectURL(prevImage); }
            setPrevImage(data.image ? `${BACKEND_URL}/${data.image}` : "");
            setUploadedNewImage(false);
            setIsEditing(false);
        } else {
            const error = await response.text();
            properties.setFeedback(error);
        }
    };

    // if editing, return alternate layout with inputs, 
    // otherwise use normal layout
    if (isEditing) {
        return (
            <div>
                <form onSubmit={handleEditSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name"
                        defaultValue={properties.comment.name}
                        placeholder="Name"
                        name="name"
                    />

                    <label htmlFor="body">Comment Content:</label>
                    <textarea
                        id="body"
                        defaultValue={properties.comment.body}
                        placeholder="Comment"
                        name="body"
                    />

                    <div id="image-upload">
                        <label htmlFor="img">Select Image</label>
                        <input ref={imageRef} type="file" id="img" name="img" accept="image/*" onChange={imageUploaded}></input>

                        <Link to="#" id="clear-link" onClick={handleImageClear}>Clear Image</Link>

                        <p id="img-preview-area">
                            {prevImage==""?(""):(<img id="preview-image" src={prevImage} />)}
                        </p>
                    </div>

                    <button className="action-button" type="submit">Submit</button>
                    <button className="action-button" type="button" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <h3>{properties.comment.name}</h3>
            <p>{properties.comment.body}</p>
            <p className="comment-image">
                {properties.comment.image ? (<img src={`${BACKEND_URL}/${properties.comment.image}`} alt="comment image" />) : ("")}
            </p>
            <button className="action-button" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="action-button" onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Comment;