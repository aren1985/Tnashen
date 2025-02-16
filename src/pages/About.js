import React from "react";
import "./About.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">մեր մասին</h2>
      <h2 className="about-subtitle">Մեզ համար կարևոր արժեք են</h2>

      <ol className="about-list">
        <li>պատվիրատուի նախասիրությունները</li>
        <li>հասկանալ պատվիրատուին և հասկացված լինել նրա կոցմից</li>
        <li>բարձրորակ աշխատանքը</li>
        <li>պատասխանատվությամբ մոտենալ աշխատանքին</li>
        <li>արդարացնել պատվիրատուի վստահությունը</li>
        <li>ժամանակին հանձնել աշխատանքը</li>
      </ol>

      <h3 className="about-description">
        Tnashen ընկերությունը արդեն երկար տարիներ զբաղվում է տարատեսակ և
        տարաբնույթ աշխատանքներով, գրանցված է որպես հարկատու ընկերություն
      </h3>
    </div>
  );
};

export default About;
