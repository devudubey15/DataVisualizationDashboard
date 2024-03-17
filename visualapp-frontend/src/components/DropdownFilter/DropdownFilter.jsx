import React from 'react';
import './DropdownFilter.css';

const DropdownFilter = ({ name, options = [], selectedOption, onSelect }) => {
  
  if (!Array.isArray(options)) {
    return <div>Error: Options must be an array</div>;
  }

  return (
    <div className="dropdown-filter">
      <label style={{ alignContent: 'center', fontWeight: 'bold' }}>{name}</label>
      <select value={selectedOption} onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select Option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
