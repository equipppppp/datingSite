import React from "react";

const TextField = ({
  label,
  type,
  name,
  value,
  placeHolder = "",
  handleChange,
  error,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        onChange={handleChange}
        type={type}
        className={"form-control" + (error ? " is-invalid" : "")}
        id={name}
        name={name}
        value={value}
        placeholder={placeHolder}
      />
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  );
};

export default TextField;
