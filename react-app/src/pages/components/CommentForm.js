import {useState} from "react";
import style from "./css/CommentForm.css";

const CommentForm = (properties) => {
    const onSubmit = async (e) => {
        e.preventDefault();

        properties.setFeedback("Posting comment...");
        const formData = new FormData(e.target);

        const response = await fetch(`https://demo-backend-77py.onrender.com/api/recipes/${properties.id}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: formData.get("name"),
                body: formData.get("body"),
            }),
        });

        if (response.status === 200) {
            const newComment = await response.json();
            properties.onCommentAdded(newComment);
            properties.setFeedback("Comment added!");
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

            <p><button className="action-button" type="submit">Submit</button></p>
        </form>
    )
}

export default CommentForm;