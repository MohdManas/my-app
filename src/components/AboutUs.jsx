
import React from "react";
import transparentBg from "../assets/teamwork-concept-landing-page.png"; // adjust path if needed
import missionBg from '../assets/2965738.jpg'

export default function AboutUsAndMission() {
  return (
    <section className="about-mission-cards-bg">
      <div className="about-mission-row">
        {/* Mission Card */}


        {/* About Us Card with background image */}
        <div
          className="about-mission-card about-mission-card--img"
          style={{
            backgroundImage: `url(${transparentBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="about-mission-heading">About Us</div>
          <div className="about-mission-content">
            
          </div>
         
          <div className="about-mission-footer">
          </div>
        </div>
        <div
          className="about-mission-card about-mission-card--img-mission"
          style={{
            backgroundImage: `url(${missionBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="about-mission-heading">Our Mission &amp; Values</div>
          <div className="about-mission-content">
           
          </div>
        </div>
      </div>
    </section>
  );
}
