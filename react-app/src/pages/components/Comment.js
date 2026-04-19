import { useState } from "react";
import axios from "axios";
import styles from "./css/Comment.css";

const Comment = (properties) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(properties.comment.name);
    const [editBody, setEditBody] = useState(properties.comment.body);

    const handleDelete = async () => {
        await axios.delete(`https://demo-backend-77py.onrender.com/api/recipes/${properties.recipeId}/comments/${properties.index}`);
        properties.onDelete(properties.index);
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put(
            `https://demo-backend-77py.onrender.com/api/recipes/${properties.recipeId}/comments/${properties.index}`,
            {name: editName, body: editBody }
        );
        properties.onEdit(properties.index, res.data);
        setIsEditing(false);
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