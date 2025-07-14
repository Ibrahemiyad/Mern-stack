import React, { useState, useEffect } from 'react';

const ProductForm = ({ initialValues, onSubmit, formTitle }) => {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialValues);
    }, [initialValues]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
            .then(() => setErrors({}))
            .catch(err => {
                if (err.response?.data?.errors) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{formTitle}</h2>

            <p>
                <label>Title:</label><br />
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>}
            </p>

            <p>
                <label>Price:</label><br />
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
                {errors.price && <span style={{ color: 'red' }}>{errors.price.message}</span>}
            </p>

            <p>
                <label>Description:</label><br />
                <textarea name="description" value={formData.description} onChange={handleChange} />
                {errors.description && <span style={{ color: 'red' }}>{errors.description.message}</span>}
            </p>

            <button type="submit">{formTitle}</button>
        </form>
    );
};

export default ProductForm;
