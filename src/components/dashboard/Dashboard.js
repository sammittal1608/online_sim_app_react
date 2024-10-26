import React, { useState } from 'react';
import './dashboard.css';

const countries = [
    { name: 'USA', code: '+1', flag: '🇺🇸', servers: ['VK + Mail.ru', 'Facebook', 'Google'] },
    { name: 'India', code: '+91', flag: '🇮🇳', servers: ['WhatsApp', 'Telegram', 'Google'] },
    { name: 'Netherlands', code: '+31', flag: '🇳🇱', servers: ['Instagram', 'WhatsApp', 'ICQ'] },
];

const serverPrices = {
    'VK + Mail.ru': '₹95',
    'Facebook': '₹95',
    'Google': '₹170',
    'WhatsApp': '₹150',
    'Telegram': '₹68',
    'Instagram': '₹95',
    'ICQ': '₹95'
};

function Dashboard() {
    const [selectedCountryIndex, setSelectedCountryIndex] = useState(null); // Changed to allow toggling

    const toggleCountry = (index) => {
        setSelectedCountryIndex(selectedCountryIndex === index ? null : index); // Toggle functionality
    };

    return (
        <div className="dashboard-container">
            <h2>Buy a Number</h2>
            

            <div className="main-content">
                {/* Country List */}
                <div className="country-list">
                    <input type="text" placeholder="Find country" className="search-box" />
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className={`country-item ${selectedCountryIndex === index ? 'active' : ''}`}
                            onClick={() => toggleCountry(index)} // Toggle the country when clicked
                        >
                            <span className="flag">{country.flag}</span>
                            <span>{country.name}</span>
                            <span>{country.code}</span>
                        </div>
                    ))}
                </div>

                {/* Server List for Selected Country */}
                {selectedCountryIndex !== null && (
                    <div className="server-list">
                        <input type="text" placeholder="Find a site" className="search-box" />
                        {countries[selectedCountryIndex].servers.map((server, i) => (
                            <div key={i} className="server-item">
                                <span>{server}</span>
                                <span className="price">{serverPrices[server]}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
