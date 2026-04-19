import { useState } from "react";
import styles from "./css/Comment.css";

const Comment = (properties) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(properties.comment.name);
    const [editBody, setEditBody] = useState(properties.comment.body);

    const handleDelete = async () => {
        const response = await fetch(`https://demo-backend-77py.onrender.com/api/recipes/${properties.recipeId}/comments/${properties.index}`,  {
            method: "DELETE"
        });

        if (response.status === 200) {
            properties.onDelete(properties.index);
            properties.setFeedback("Comment Deleted.");
        } else {
            const error = await response.text();
            properties.setFeedback(error);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://demo-backend-77py.onrender.com/api/recipes/${properties.recipeId}/comments/${properties.index}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify ({
                name: editName,
                body: editBody 
            }),
        });

        if (response.status === 200) {
            const data = await response.json();
            properties.onEdit(properties.index, data);
            properties.setFeedback("Comment edited.");
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
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        placeholder="Name"
                    />

                    <label htmlFor="body">Comment Content:</label>
                    <textarea
                        id="body"
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                        placeholder="Comment"
                    />

                    <button className="action-button" type="submit">Submit</button>
                    <button className="action-button" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <h3>{properties.comment.name}</h3>
            <p>{properties.comment.body}</p>
            <button className="action-button" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="action-button" onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Comment;