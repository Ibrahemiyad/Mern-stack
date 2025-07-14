import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({ title: "", price: 0, description: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(" Product updated:", res.data);
                setErrors({});
            })
            .catch(err => {
                console.error(" Error updating product", err);
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                }
            });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" value={product.title} onChange={handleChange} />
            {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>}
            <br />
            <label>Price</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} />
            {errors.price && <span style={{ color: 'red' }}>{errors.price.message}</span>}
            <br />
            <label>Description</label>
            <textarea name="description" value={product.description} onChange={handleChange}></textarea>
            {errors.description && <span style={{ color: 'red' }}>{errors.description.message}</span>}
            <br />
            <input type="submit" />
        </form>

    )
}
export default UpdateProduct;
