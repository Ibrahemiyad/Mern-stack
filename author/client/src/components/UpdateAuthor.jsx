import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AuthorForm from './AuthorForm';

const UpdateAuthor = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
            .catch(() => setAuthor(false));
    }, [id]);

    const handleUpdate = data => {
        axios.patch(`http://localhost:8000/api/authors/${id}`, data)
            .then(() => navigate('/'))
            .catch(err => setErrors(err.response.data.errors));
    };

    if (author === null) return <p>Loading...</p>;
    if (author === false) return (
        <div>
            <p>We couldn't locate this author. Want to add a new one?</p>
            <Link to="/authors/new">Add Author</Link>
        </div>
    );

    return (
        <>
        <AuthorForm onSubmit={handleUpdate} initialData={author} errors={errors} />
        </>
    );
};

export default UpdateAuthor;
