import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});  // <-- track backend validation errors

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", { title, price, description })
            .then(res => {
                console.log("✅ Product created:", res.data);
                setTitle("");
                setPrice(0);
                setDescription("");
                setErrors({});
            })
            .catch(err => {
                console.error("❌ Error creating product", err);
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);  // <-- set backend errors
                }
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>

            <p>
                <label>Title:</label><br />
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>}
            </p>

            <p>
                <label>Price:</label><br />
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                {errors.price && <span style={{ color: 'red' }}>{errors.price.message}</span>}
            </p>

            <p>
                <label>Description:</label><br />
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
                {errors.description && <span style={{ color: 'red' }}>{errors.description.message}</span>}
            </p>

            <button type="submit">Create Product</button>
        </form>
    );
};

export default ProductForm;
