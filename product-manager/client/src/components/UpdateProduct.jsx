import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({ title: "", price: 0, description: "" });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(console.error);
    }, [id]);

    const handleUpdate = (updatedData) => {
        return axios.patch(`http://localhost:8000/api/products/${id}`, updatedData)
            .then(res => {
                console.log("✅ Product updated:", res.data);
                navigate("/");
            });
    };

    return (
        <ProductForm
            initialValues={product}
            onSubmit={handleUpdate}
            formTitle="Edit Product"
        />
    );
};

export default UpdateProduct;
