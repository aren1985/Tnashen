// src/components/Menu.js
import React, { useState } from "react";
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
            <a href="/">գլխավոր</a>
          </li>
          <li>
            <a href="/about">մեր մասին</a>
          </li>
          <li>
            <a href="/services">մեր աշխատանքները</a>
          </li>
          <li>
            <a href="/contact">կոնտակտ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
