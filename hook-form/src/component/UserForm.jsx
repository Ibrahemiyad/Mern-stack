import React, { useState } from "react";

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return (
        <div >
            <form onSubmit={createUser}>
                <div >
                    <label htmlFor="username">Username: </label>
                    <input id="username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    {username && username.length < 2 && (
                        <p style={{ color: "red" }}>
                            Username must be at least 2 characters long.
                        </p>
                    )}
                </div>
                <div >
                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    {email && email.length < 5 && (
                        <p style={{ color: "red" }}>
                            Email must be at least 5 characters long.
                        </p>
                    )}

                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    {password && password.length < 8 && (
                        <p style={{ color: "red" }}>
                            Password must be at least 8 characters long.
                        </p>
                    )}
                </div>
                <div >
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    {confirmPassword && confirmPassword.length < 8 && (
                        <p style={{ color: "red" }}>
                            Confirm Password must be at least 8 characters long.
                        </p>
                    )}

                    {confirmPassword && confirmPassword !== password && (
                        <p style={{ color: "red" }}>
                            Passwords must match.
                        </p>
                    )}
                </div>
            </form>

            <hr />

            <h3>Entered Data (Live):</h3>
            <p>
                <strong>Username:</strong> {username}
            </p>
            <p>
                <strong>Email:</strong> {email}
            </p>
            <p>
                <strong>Password:</strong> {password}
            </p>
            <p>
                <strong>Confirm Password:</strong> {confirmPassword}
            </p>
        </div>
    );
};
export default UserForm;