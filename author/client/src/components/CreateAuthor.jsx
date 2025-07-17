import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthorForm from './AuthorForm';

const CreateAuthor = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleCreate = (data) => {
        axios.post('http://localhost:8000/api/authors', data)
            .then(() => navigate('/'))
            .catch(err => {
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <AuthorForm onSubmit={handleCreate} errors={errors} initialData={{ name: "" }} />
        </div>
    );
};

export default CreateAuthor;
