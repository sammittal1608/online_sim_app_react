import React, { useState } from 'react';
import './ReceiveSMS.css'; // Create CSS for this component

const ReceiveSMS = () => {
  const [server, setServer] = useState(null);
  const servers = ["Server 1", "Server 2", "Server 3"];

  const handleServerSelection = (server) => {
    setServer(server); // Set the selected server
  };

  if (!server) {
    return (
      <div className="server-selection">
        <h2>Select a Server</h2>
        <div className="server-list">
          {servers.map((server, index) => (
            <button key={index} onClick={() => handleServerSelection(server)}>
              {server}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Once server is selected, show country selection and SMS options
  return (
    <div className="sms-selection">
      <h2>{server} - Select a Country to Receive SMS</h2>
      {/* Add your country selection and SMS interface here */}
    </div>
  );
};

export default ReceiveSMS;
