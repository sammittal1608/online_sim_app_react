// src/components/wallet/Points.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './wallet.css';

const Points = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // Fetch user points from backend (replace with real API)
    axios.get('http://localhost:5000/user/points')
      .then(response => setPoints(response.data.points))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="points-box">
      <h2>Your Points</h2>
      <p>{points}</p>
    </div>
  );
};

export default Points;
