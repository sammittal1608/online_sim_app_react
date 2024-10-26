import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from './components/dashboard/dashboard';
import BalanceTopUp from "./components/wallet/BalanceTopUp"; // Make sure this import path is correct
import './App.css'; // CSS for the app

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SidebarWithNavigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/referral" element={<div>Referral Program</div>} />
            <Route path="/wallet" element={<BalanceTopUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const SidebarWithNavigation = () => {
  const navigate = useNavigate(); // Use navigate to redirect

  const handleMenuClick = (menu) => {
    if (menu === 'wallet') {
      navigate('/wallet'); // Navigate to the Wallet route
    } else if (menu === 'dashboard') {
      navigate('/dashboard'); // Navigate to the Dashboard route
    } else if (menu === 'referral') {
      navigate('/referral'); // Navigate to the Referral route
    }
  };

  return <Sidebar onMenuClick={handleMenuClick} />;
};

export default App;
