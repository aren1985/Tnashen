import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Menu.css"; // Import your CSS for styling

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`menu-container ${isOpen ? "open" : "closed"}`}>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {isOpen && (
          <button className="close-icon" onClick={closeMenu}>
            &times; {/* This is a simple "X" character */}
          </button>
        )}
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              գլխավոր
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              մեր մասին
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              մեր աշխատանքները
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              կոնտակտ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
