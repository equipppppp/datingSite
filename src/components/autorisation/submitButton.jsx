import React from "react";

const SubmitButton = ({ type, text, disabled }) => {
  return (
    <button type={type} className="btn btn-primary center" disabled={disabled}>
      {text}
    </button>
  );
};

export default SubmitButton;
