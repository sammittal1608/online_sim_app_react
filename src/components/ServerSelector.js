import React, { useState } from 'react';
import '../assets/css/ServerCountrySelector.css';

const ServerSelector = ({ onServerSelect }) => {
  const [selectedServer, setSelectedServer] = useState(null);

  const handleServerClick = (server) => {
    setSelectedServer(server);
    onServerSelect(server);
  };

  return (
    <div className="server-selector">
      <h3>Select a Server</h3>
      <div className="servers">
        <button className={selectedServer === 'Server 1' ? 'selected' : ''} onClick={() => handleServerClick('Server 1')}>Server 1</button>
        <button className={selectedServer === 'Server 2' ? 'selected' : ''} onClick={() => handleServerClick('Server 2')}>Server 2</button>
        <button className={selectedServer === 'Server 3' ? 'selected' : ''} onClick={() => handleServerClick('Server 3')}>Server 3</button>
      </div>
    </div>
  );
};

export default ServerSelector;
