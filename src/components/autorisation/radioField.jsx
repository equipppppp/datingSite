import React from "react";

const RadioField = ({ options, value, name, handleChange }) => {
  return (
    <>
      <div className="mb-1">
        <div>Выбери свой пол</div>
        {options.map((option) => (
          <div key={option} className="form-check form-check-inline mb-3">
            <input
              onChange={handleChange}
              className="form-check-input"
              type="radio"
              name={name}
              id={option}
              value={option}
              checked={option === value}
            />
            <label className="form-check-label" htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioField;
