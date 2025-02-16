import React from "react";

// Import Routes and Route

// Import your Menu component

// Create a Contact component
import qualityImage from "../assets/quality.jpg";
import agreeImage from "../assets/agree.jpg";
// Import the CSS file for styling

function Home() {
  return (
    <div style={appStyle}>
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
        <p style={{ fontSize: "20px", color: "darkblue", fontWeight: "bold" }}>
          հեռախոս (094-67-89-89)
        </p>

        <h1
          style={{
            color: "brown",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Tnashen ձեր Օջախները լինեն շեն
        </h1>

        <h2>Որակի ապահովում</h2>
        <img src={qualityImage} alt="qul" className="responsive-image" />
        <h2>Փոխըմբռնումով մոտեցում հաճախորդի պահանջներին</h2>
        <img src={agreeImage} alt="agree" className="responsive-image" />
      </main>
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

export default Home;
