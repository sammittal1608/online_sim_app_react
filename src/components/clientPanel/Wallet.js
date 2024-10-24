import React, { useState } from 'react';
import '../../assets/css/clientPanel/Wallet.css';  // Updated path for Wallet.css

const Wallet = () => {
  const [walletBalance, setWalletBalance] = useState(0);

  // Function to handle manual UPI recharge
  const handleRecharge = (amount) => {
    // Simulate recharge process
    setWalletBalance(walletBalance + amount);
  };

  return (
    <div className="wallet-container">
      <h2>Wallet</h2>
      <p>Current Balance: {walletBalance} points</p>
      <button onClick={() => handleRecharge(100)}>Recharge 100 points via UPI</button>
    </div>
  );
};

export default Wallet;
