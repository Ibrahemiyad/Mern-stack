import React from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const CreateProduct = () => {
    const handleCreate = (newProduct) => {
        return axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                console.log("✅ Product created:", res.data);
                window.location.reload();
            });
    };

    return (
        <ProductForm
            initialValues={{ title: "", price: 0, description: "" }}
            onSubmit={handleCreate}
            formTitle="Add Product"
        />
    );
};

export default CreateProduct;
