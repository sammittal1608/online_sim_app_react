import React from 'react';
import '../../assets/css/clientPanel/BuyNumber.css';

const BuyNumber = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Buy Number</h2>
      <div className="card">
        <div className="card-title">Available Numbers</div>
        <p>Here you can buy a new number for SMS verification.</p>
        {/* Add more content for buying numbers */}
      </div>
    </div>
  );
};

export default BuyNumber;

