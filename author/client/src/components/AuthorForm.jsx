import React, { useState, useEffect } from 'react';

const AuthorForm = ({ onSubmit, initialData = { name: "" }, errors, title = "Favorite Author" }) => {
    const [formData, setFormData] = useState(initialData);

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2>{title}</h2>
            <label>Name:</label><br />
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '5px' }}
            />
            {errors?.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AuthorForm;
