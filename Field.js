import React from 'react';

const Field = ({ label, type, options, value, onChange, required }) => {
  return (
    <div className="field">
      <div className="label">{label}</div>
      {type === 'select' ? (
        <select value={value} onChange={onChange} required={required}>
          {options.map((option, index) => (
            <option key={index} value={option.toLowerCase().replace(/\s+/g, '-')}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} required={required} />
      )}
    </div>
  );
};

export default Field;