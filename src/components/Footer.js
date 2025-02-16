// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>
        <span>Tnashen</span> շինարարական ընկերություն. Բոլոր իրավունքները
        պաշտպանված են:
      </p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#282c34", // Match the header background
  color: "white", // Match the header text color
  padding: "10px", // Add some padding
  textAlign: "center", // Center the text
  width: "100%", // Ensure it spans the full width
};

export default Footer;
