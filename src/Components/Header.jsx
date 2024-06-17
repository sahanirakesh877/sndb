import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavLinkClick = () => {
    setIsNavCollapsed(true);
  };

  const handleToggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <i className="fa fa-user-md me-2" />
            SNDB
          </h1>
        </Link>
        <button
          className="navbar-toggler  headbutton"
          type="button"
          onClick={handleToggleNav}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0">
            <Link
              to="/"
              className="nav-item nav-link active"
              onClick={handleNavLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              About
            </Link>
            <Link
              to="/service"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              Service
            </Link>
            <Link
              to="/doctors"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              className="nav-item nav-link"
              onClick={handleNavLinkClick}
            >
              Contact
            </Link>
          </div>
          <Link
            to="/appointment"
            className="btn btn-primary py-2 px-4 ms-3"
            onClick={handleNavLinkClick}
          >
            Appointment
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
