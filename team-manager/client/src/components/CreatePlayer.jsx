import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PlayerForm from './PlayerForm';

const CreatePlayer = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleCreate = (data) => {
        console.log("Sending to backend:", data);  // تأكد أن البيانات موجودة هنا
        axios.post('http://localhost:8000/api/teams', data)
            .then(res => {
                console.log("Created:", res.data);
                navigate('/teams/list');  // تأكد أن هذا المسار صحيح في تطبيقك
            })
            .catch(err => {
                console.error("Error creating player:", err.response?.data || err.message);
                if (err.response?.data?.errors) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
            <h1>Create New Player</h1>
            <PlayerForm onSubmit={handleCreate} errors={errors} />
        </div>
    );
};

export default CreatePlayer;
