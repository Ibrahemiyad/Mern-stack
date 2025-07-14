import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        {" | "}
                        <Link to={`/products/${product._id}/edit`}>Edit</Link>
                        {" | "}
                        <DeleteButton productId={product._id} onSuccess={fetchProducts} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListProduct;
