import React from 'react';

const ToggleButton = ({ currentValue, options, onToggle }) => {
    return (
      <div>
        {options.map(option => (
          <button
            key={option.value}
            onClick={() => onToggle(option.value)}
            className={currentValue === option.value ? 'active' : ''}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default ToggleButton;