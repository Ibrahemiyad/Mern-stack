import React from "react";
import axios from "axios";

const DeleteButton = ({ productId, onSuccess }) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(() => onSuccess())
            .catch(err => console.error("Error deleting", err));
    };

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>Delete</button>
    );
};

export default DeleteButton;
