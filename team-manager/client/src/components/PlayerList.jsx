import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    const fetchPlayers = () => {
        axios.get("http://localhost:8000/api/teams")
            .then(res => {
                const sorted = res.data.sort((a, b) => a.name.localeCompare(b.name));
                setPlayers(sorted);
            })
            .catch(err => console.error(err));
    };

    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/teams/${id}`)
            .then(() => {
                setPlayers(prev => prev.filter(player => player._id !== id));
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    return (
        <div>
            <h2>Players</h2>
            <Link to="/teams/new">Add New Player</Link>

            {players.length === 0 ? (
                <p>No players yet.</p>
            ) : (
                <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%', marginTop: '10px' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Preferred Position</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>{player.preferredPosition}</td>
                                <td>
                                    <Link to={`/teams/${player._id}/edit`}>Edit</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(player._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PlayerList;
