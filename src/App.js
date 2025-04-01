import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", dob: "", password: "" });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost/health_management/api.php");
        setUsers(response.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost/health_management/api.php", formData);
        fetchUsers();
    };

    const handleDelete = async (id) => {
        await axios.delete("http://localhost/health_management/api.php", { data: { id } });
        fetchUsers();
    };

    return (
        <div>
            <h2>User Management</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="date" name="dob" onChange={handleChange} required />
                <button type="submit">Add User</button>
            </form>
            <h3>Users List</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email}) - {user.dob}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
