import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
                console.log(res.data)
            })
            .catch(err => console.error(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                fetchProducts();
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Product List</h1>
            <button onClick={fetchProducts}>Fetch Products</button>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ListProduct;
