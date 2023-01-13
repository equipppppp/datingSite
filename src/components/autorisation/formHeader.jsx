import React from "react";
import { Link, useLocation } from "react-router-dom";

const FormHeader = () => {
  const { pathname } = useLocation();

  return (
    <div className="formHeader">
      <Link to="/login">
        <span className={pathname === "/login" ? "active" : ""}>Вход</span>
      </Link>
      <span>/</span>
      <Link to="/registration">
        <span className={pathname === "/registration" ? "active" : ""}>
          Регистрация
        </span>
      </Link>
    </div>
  );
};

export default FormHeader;
