import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About"; // Create an About component
import Services from "./pages/Services"; // Create a Services component
import Contact from "./pages/Contact"; // Create a Contact component

import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div style={appStyle}>
      <Header />

      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const appStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainStyle = {
  flex: "1",
  padding: "20px",
  textAlign: "center",
};

export default App;
