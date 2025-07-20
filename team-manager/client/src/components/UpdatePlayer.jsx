import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PlayerForm from './PlayerForm';

const UpdatePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/teams/${id}`)
            .then(res => setPlayer(res.data))
            .catch(() => setPlayer(false));
    }, [id]);

    const handleUpdate = (data) => {
        axios.patch(`http://localhost:8000/api/teams/${id}`, data)
            .then(() => navigate('/'))
            .catch(err => {
                if (err.response?.data?.errors) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    if (player === null) return <p>Loading...</p>;
    if (player === false) {
        return (
            <div>
                <p>We couldn't locate this player. Want to add a new one?</p>
                <Link to="/teams/new">Add Player</Link>
            </div>
        );
    }

    return (
        <PlayerForm 
            onSubmit={handleUpdate} 
            initialData={player} 
            errors={errors} 
            title="Update Player" 
        />
    );
};

export default UpdatePlayer;
