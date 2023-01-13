import React from "react";
import { qualities } from "../../fakeAPI/API";

const CheckField = ({ name, handleChangeQual, error }) => {
  return (
    <>
      <div className="mb-3">
        {" "}
        <div>Выбери свои качества</div>
        {Object.values(qualities).map((qual) => (
          <div
            key={qual._id}
            className={"form-check" + (error ? " is-invalid" : "")}
          >
            <input
              onChange={handleChangeQual}
              className="form-check-input"
              type="checkbox"
              name={name}
              id={qual._id}
              value={qual.name}
            />
            <label className="form-check-label" htmlFor={qual._id}>
              {qual.name}
            </label>
          </div>
        ))}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
};

export default CheckField;
