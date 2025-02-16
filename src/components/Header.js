// src/components/Header.js
import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>TNASHEN</h1>
      <Menu />
    </header>
  );
};

const headerStyle = {
  background: "#282c34",
  color: "skyblue",
  padding: "10px",
  display: "flex", // Use flexbox for alignment
  alignItems: "center", // Center items vertically
  justifyContent: "space-between", // Space between title and menu
};

const titleStyle = {
  margin: 0, // Remove default margin
};

export default Header;
