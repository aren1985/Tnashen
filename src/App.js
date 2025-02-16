// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import qualityImage from "./assets/quality.jpg";
import agreeImage from "./assets/agree.jpg";
import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <main style={mainStyle}>
        <h2
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            color: "blue",
          }}
        >
          Tnashen շինարարական ընկերություն
        </h2>
        <p style={{ fontWeight: "bold" }}>
          Tnashen շինարարական ընկերությունը ձեզ է առաջարկում իր բարձրորակ
          ծառայությունները, մեր փորձառու և հմուտ վարպետները
          կկառուցեն,կվերակառուցեն,կնորոգեն և կվերանորոգեն ցանկացած շինություն
        </p>
        <p style={{ fontSize: "30px" }}>հեռաոս (093000000)</p>

        <h2>Որակի ապահովում</h2>
        <img src={qualityImage} alt="qul" className="responsive-image" />
        <h2>Փոխըմբռնումով մոտեցում հաճախորդի պահանջներին</h2>
        <img src={agreeImage} alt="agree" className="responsive-image" />
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
