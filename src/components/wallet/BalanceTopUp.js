import React, { useState } from "react";
import './styles.css'; // Assuming the styles are in the same folder

const BalanceTopUp = () => {
  const [transactions, setTransactions] = useState([]); // State for transactions
  const [showTopUp, setShowTopUp] = useState(true); // State to toggle between Top-Up and Transaction views
  const [paidAmount, setPaidAmount] = useState(""); // State for the amount paid
  const [transactionIdInput, setTransactionIdInput] = useState(""); // State for user-input transaction ID
  const balance = 0; // Current balance

  const submitRefill = () => {
    const selectedCurrency = "INR"; // Default currency
    const amount = parseFloat(paidAmount); // Parse the paid amount to a float

    // Validation for transaction ID
    if (!transactionIdInput) {
      alert("Please enter the transaction ID.");
      return;
    }

    const transaction = {
      currency: selectedCurrency,
      amount: amount,
      date: new Date().toLocaleDateString(), // Get current date
      time: new Date().toLocaleTimeString(), // Get current time
      id: transactionIdInput, // Use user-input transaction ID
      status: "Pending", // Default status
    };

    // Update transactions
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);

    // Clear inputs after submission
    setPaidAmount("");
    setTransactionIdInput("");
  };

  return (
    <div className="balance-container"> {/* Added a container for balance */}
      <h2>Balance</h2>
      <h3>Current Balance: ₹{balance}</h3> {/* Displaying the current balance */}
      <div className="tabs">
        <button onClick={() => setShowTopUp(true)} className={showTopUp ? "active" : ""}>
          Top-Up
        </button>
        <button onClick={() => setShowTopUp(false)} className={!showTopUp ? "active" : ""}>
          Transactions
        </button>
      </div>

      {showTopUp ? (
        <div className="top-up-section">
          <div className="section payment-method">
            <h3>Pay via QR Code</h3>
            <img 
              src="./Assets/qr_image.jpg" // Replace with actual QR image path
              alt="QR Code for Payment" 
              className="qr-image" // Add a class for styling
            />
            <p>Please enter the amount you paid in QR:</p>
            <input 
              type="number" 
              value={paidAmount} 
              onChange={(e) => {
                const value = e.target.value;
                if (value >= 0 || value === "") {
                  setPaidAmount(value);
                }
              }} 
              placeholder="Enter amount" 
              className="amount-input" // Class for styling
            />
            <p>Please enter your Transaction ID:</p>
            <input 
              type="text" 
              value={transactionIdInput} 
              onChange={(e) => setTransactionIdInput(e.target.value)} 
              placeholder="Enter Transaction ID" 
              className="amount-input" // Class for styling
            />
          </div>

          <div className="section">
            <button onClick={submitRefill}>Submit Your Transaction</button>
          </div>
        </div>
      ) : (
        <div className="transaction-section">
          <h3>Transaction History</h3>
          {transactions.length > 0 ? (
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Currency</th>
                  <th>Amount</th>
                  <th>Transaction ID</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.time}</td>
                    <td>{transaction.currency}</td>
                    <td>₹{transaction.amount}</td>
                    <td>{transaction.id}</td>
                    <td>{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No transactions found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BalanceTopUp;
