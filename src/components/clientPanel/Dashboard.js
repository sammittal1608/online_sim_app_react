import React from 'react';
import '../../assets/css/clientPanel/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <a href="/dashboard">Receive SMS</a>
        <a href="/mobile-proxies">Mobile Proxies</a>
        <a href="/number-rent">Number Rent</a>
        <a href="/referral-program">Referral Program</a>
        <a href="/refill-balance">Refill Balance</a>
        <a href="/sms-history">SMS History</a>
        <a href="/checkout">Checkout</a>
        <a href="/tickets">Tickets</a>
        <a href="/notifications">Notifications</a>
      </div>

      {/* Dashboard content */}
      <div className="dashboard-container">
        <h2 className="dashboard-header">Client Dashboard</h2>

        {/* Balance Card */}
        <div className="card">
          <div className="card-title">Balance</div>
          <p>$21.86</p>
          <p>Frozen balance: $0.76</p>
          <a className="topup-btn" href="/refill-balance">Top up</a>
        </div>

        {/* My Numbers */}
        <div className="card">
          <div className="card-title">My Numbers</div>
          <div className="status-container">
            <p>+91 (910) 835-3709</p>
            <p>14:51</p>
            <p>Google (YouTube, Gmail)</p>
          </div>
          <div className="status-container">
            <p>+91 (888) 841-2511</p>
            <p>14:48</p>
            <p>Google (YouTube, Gmail)</p>
          </div>
          <div className="status-container">
            <p>+91 (986) 409-1711</p>
            <p>14:45</p>
            <p>Google (YouTube, Gmail)</p>
          </div>
        </div>

        {/* Additional sections */}
        <div className="card">
          <div className="card-title">Other Features</div>
          <p>Access Mobile Proxies, Number Rent, and more...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
