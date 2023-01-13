import React from "react";
import { professions } from "../../fakeAPI/API";

const SelectForm = ({ label, name, value, handleChange, defaultValue }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option value={defaultValue}>{defaultValue}</option>
        {Object.values(professions).map((prof, i) => (
          <option value={prof.name} key={i}>
            {prof.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
