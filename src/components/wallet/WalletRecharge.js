// src/components/wallet/WalletRecharge.js
import React, { useState } from 'react';
import './wallet.css';
import QRCode from 'qrcode.react';

const WalletRecharge = () => {
  const [amount, setAmount] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleRecharge = () => {
    // Implement the backend call to recharge the wallet
    setShowQR(true);
  };

  return (
    <div className="recharge-box">
      <h2>Recharge Wallet</h2>
      <input 
        type="number" 
        placeholder="Enter Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button onClick={handleRecharge}>Generate QR</button>

      {showQR && (
        <div className="qr-code">
          <QRCode value={`upi://pay?pa=kingofroulette786-3@okhdfcbank&am=${amount}`} />
        </div>
      )}
    </div>
  );
};

export default WalletRecharge;
