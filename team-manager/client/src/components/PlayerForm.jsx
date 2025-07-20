import React, { useState, useEffect } from 'react';

const PlayerForm = ({ onSubmit, initialData = {}, errors = {}, title = "Add Player" }) => {
    const [formData, setFormData] = useState({
        name: "",
        preferredPosition: "",
        ...initialData, // لو فيه بيانات مبدئية
    });

    useEffect(() => {
        setFormData(prev => ({ ...prev, ...initialData }));
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // إرسال البيانات للأب
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2 className="text-lg font-bold mb-4">{title}</h2>

            <div className="mb-4">
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="preferredPosition">Preferred Position:</label><br />
                <input
                    type="text"
                    name="preferredPosition"
                    id="preferredPosition"
                    value={formData.preferredPosition}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
            </div>

            <button type="submit">Submit</button>

        </form>
    );
};

export default PlayerForm;
