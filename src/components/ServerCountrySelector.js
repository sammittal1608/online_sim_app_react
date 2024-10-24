import React, { useState } from 'react';
import ServerSelector from './ServerSelector';
import CountrySelector from './CountrySelector';
import '../assets/css/ServerCountrySelector.css';

const ServerCountrySelector = () => {
  const [selectedServer, setSelectedServer] = useState(null);

  const handleServerSelect = (server) => {
    setSelectedServer(server);
  };

  return (
    <div className="server-country-selector">
      <ServerSelector onServerSelect={handleServerSelect} />
      {selectedServer && <CountrySelector selectedServer={selectedServer} />}
    </div>
  );
};

export default ServerCountrySelector;
