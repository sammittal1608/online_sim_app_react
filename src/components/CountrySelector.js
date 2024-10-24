import React from 'react';
import '../assets/css/ServerCountrySelector.css';

const CountrySelector = ({ selectedServer }) => {
  const countries = [
    { name: 'USA', code: '+1', price: '1.28', flag: '🇺🇸' },
    { name: 'Russia', code: '+7', price: '1.28', flag: '🇷🇺' },
    { name: 'Germany', code: '+49', price: '1.28', flag: '🇩🇪' },
    { name: 'Ukraine', code: '+380', price: '1.28', flag: '🇺🇦' },
    // Add more countries here
  ];

  return (
    <div className="country-selector">
      <h3>Select a Country ({selectedServer})</h3>
      <div className="country-list">
        {countries.map((country, index) => (
          <div key={index} className="country-item">
            <span>{country.flag} {country.name} ({country.code})</span>
            <span>${country.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySelector;
