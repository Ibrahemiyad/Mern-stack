import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DetailsProduct = () => {
    const { id} = useParams();
    const [product, setProduct] = useState({});

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                console.log("Product deleted successfully");
            })
            .catch(err => console.error("Error deleting product:", err));
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Detail product</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/products/${id}/edit`}>
                Edit
            </Link>
        </div>
    )
}

export default DetailsProduct;


