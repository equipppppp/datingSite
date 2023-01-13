import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();
  return (
    <nav>
      <Link to="/login">
        <span
          className={
            pathname === "/login" || pathname === "/registration"
              ? "active"
              : ""
          }
        >
          Авторизация
        </span>
      </Link>
      <Link to="/users">
        <span className={pathname === "/users" ? "active" : ""}>
          Пользователи
        </span>
      </Link>
    </nav>
  );
}

export default Navigation;
