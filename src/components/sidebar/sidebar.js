import React from 'react';
import './sidebar.css';

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <div className="app-name">OnlineSim</div>
      <div className="balance-section">
        <p>Balance: $0</p>
        <p>Frozen balance: $0</p>
        <button className="top-up-button">Top up</button>
      </div>

      <div className="menu">
        <button className="menu-item active" onClick={() => onMenuClick('dashboard')}>Number rent</button>
        <button className="menu-item" onClick={() => onMenuClick('referral')}>Referral program</button>
        <button className="menu-item" onClick={() => onMenuClick('wallet')}>Wallet</button>
        <div className="menu-item user-info">
          <p>qwertyuiopp@gmail.com</p>
          <p>ID: 6839624</p>
        </div>
        <button className="logout-button">Logout</button>
      </div>

      <div className="footer">
        <div className="language-select">🌐 English</div>
      </div>
    </div>
  );
};

export default Sidebar;
