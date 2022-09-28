import React from "react";
import gymImage from "./service-images/gym.jpg";
import spaImage from "./service-images/spa.jpg";
import conImage from "./service-images/conference.jpg";
import poolImg from "./service-images/pool.jpg";
import loungeImg from "./service-images/lounge.jpg";
import roomImg from "./service-images/room.jpg";

export default function Services() {
  return (
    <>
      <section className="gymsection">
        <div className="gym">
          <span>GYM $ FITNESS SERVICES </span>
          <h2>Welcome to our world class fitness services</h2>
          <p>we give you the best there is in fitness</p>
          <hr></hr>
          <button>Book Now</button>
        </div>
        <img className="fitness" src={gymImage} alt="gympic" />
      </section>

      <div className="spa">
        <img className="spaImg" src={spaImage} alt="spapic" />
        <div className="spaMessage">
          <span> SPA AND MASSAGE SERVICES</span>
          <h2>welcome to a world class SPA and Massage services</h2>
          <p>Where Luxury Meets Qualit</p>
          <hr></hr>
          <button>Book Now</button>
        </div>
      </div>

      <div className="conference">
        <div className="conferenceMsg">
          <span>CONFERENCE AND CORPORATE ROOMS</span>
          <h2>Welcome to a world class conference rooms</h2>
          <p>We give you the best Meeting environment</p>
          <hr></hr>
          <button>Book Now</button>
        </div>
        <img className="conferenceImg" src={conImage} alt="conferencepic" />
      </div>

      <div className="pool">
        <img className="poolImg" src={poolImg} alt="poolimage" />
        <div className="poolMsg">
          <span>POOL AND JACUZZI SERVICES</span>
          <h2>Welcome to the world's most refreshing experience </h2>
          <p>we offer the best of jacuzzi and pool experiences</p>
          <hr></hr>
          <button>Book Now</button>
        </div>
      </div>

      <div className="lounge">
        <div className="loungeMsg">
          <span>LOUNGE SERVICES</span>
          <h2>welcome to the world's most relaxing place</h2>
          <p>We offer the best of comfort to easy your mind</p>
          <br></br>
          <button>Book Now</button>
        </div>
        <img className="loungeImg" src={loungeImg} alt="loungeimage" />
      </div>

      <div className="rooms">
        <img className="roomImg" src={roomImg} alt="roomimage" />
        <div className="roomMsg">
          <span>ROOM SERVICES</span>
          <h2>Welcome to the world's most luxury rooms</h2>
          <p>We offer the best of beddings to make you feel at home</p>
          <hr></hr>
          <button>Book Now</button>
        </div>
      </div>
    </>
  );
}
