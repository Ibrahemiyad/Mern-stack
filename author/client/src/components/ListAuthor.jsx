import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListAuthor = () => {
    const [authors, setAuthors] = useState([]);

    const fetchAuthors = () => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                const sorted = res.data.sort((a, b) => a.name.localeCompare(b.name));
                setAuthors(sorted);
            })
            .catch(err => console.error(err));
    };

    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(() => {
                setAuthors(prev => prev.filter(a => a._id !== id));
            })
            .catch(err => console.error(err));
    };

    useEffect(() => { fetchAuthors(); }, []);

    return (
        <div>
            <h2>Authors</h2>
            <Link to="/authors/new">Add New Author</Link>
            {authors.length === 0 ? (
                <p>No authors yet.</p>
            ) : (
                <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%', marginTop: '10px' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map(a => (
                            <tr key={a._id}>
                                <td>{a.name}</td>
                                <td>
                                    <Link to={`/authors/${a._id}/edit`}>Edit</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(a._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ListAuthor;
