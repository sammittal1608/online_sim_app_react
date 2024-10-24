// src/components/dashboard/AdminPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users list (replace with real API)
    axios.get('http://localhost:5000/admin/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleAddPoints = (userId, points) => {
    // Implement backend call to add points to the user
    axios.post('http://localhost:5000/admin/add-wallet', { userId, points })
      .then(response => alert('Points added successfully'))
      .catch(error => console.log(error));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.points} Points
            <button onClick={() => handleAddPoints(user.id, 100)}>Add 100 Points</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
