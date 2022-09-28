import React from "react";
import gymImage from "./service-images/gym.jpg";
import spaImage from "./service-images/spa.jpg";
import conImage from "./service-images/conference.jpg";
export default function Services() {
  return (
    <>
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
      <div className="spa">
        <img className="spaImg" src={spaImage} alt="spapic" />
        <div className="spaMessage">
          <span> SPA AND MASSAGE SERVICES</span>
          <h2>welcome to a world class SPA and Massage services</h2>
          <p>Where Luxury Meets Qualit</p>
        </div>
      </div>
      <div className="conference">
        <div className="conferenceMsg">
          <span>CONFERENCE AND CORPORATE ROOMS</span>
          <h2>Welcome to a world class conference rooms</h2>
          <p>We give you the best Meeting environment</p>
        </div>
        <img className="conferenceImg" src={conImage} alt="conferencepic" />
      </div>
    </>
  );
}
