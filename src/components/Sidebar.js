import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Sidebar.css'; // Add styles for sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Virtual SMS</h2>
      </div>
      <ul>
        <li><Link to="/receive-sms">Receive SMS</Link></li>
        <li><Link to="/proxies">Mobile Proxies</Link></li>
        <li><Link to="/number-rent">Number Rent</Link></li>
        <li><Link to="/referral">Referral Program</Link></li>
      </ul>
      <div className="balance">
        <button className="top-up">Top Up</button>
      </div>
    </div>
  );
};

export default Sidebar;
