import React from "react";
import gymImage from "./service-images/gym.jpg";
export default function Services() {
  return (
    <section className="gymsection">
      <div className="gym">
        <span>GYM $ FITNESS SERVICES </span>
        <h2>Welcome to our world class fitness services</h2>
        <p>we give you the best there is in fitness</p>
      </div>
      <div className="fitness">
        <img src={gymImage} alt="gympic" height="600" width="900" />
      </div>
    </section>
  );
}
