import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ReceiveSMS from './components/ReceiveSMS';
import BuyNumber from './components/clientPanel/BuyNumber';
import Dashboard from './components/clientPanel/Dashboard';
import Wallet from './components/clientPanel/Wallet';
import RefillBalance from './components/clientPanel/RefillBalance';
import SMSHistory from './components/clientPanel/SMSHistory';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/receive-sms" element={<ReceiveSMS />} />
          <Route path="/buy-number" element={<BuyNumber />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/refill-balance" element={<RefillBalance />} />
          <Route path="/sms-history" element={<SMSHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
