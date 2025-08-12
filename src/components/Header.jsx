import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-area">
          <img src="/logo.png" alt="Logo" className="header-logo" />
          <span className="app-title">LIVRARIA</span>
        </div>

        <nav className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/cadastrar"
            className={location.pathname === "/cadastrar" ? "active" : ""}
          >
            Cadastrar
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
