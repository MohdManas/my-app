
import React from "react";
import transparentBg from "../assets/teamwork-concept-landing-page.png"; // adjust path if needed
import missionBg from '../assets/2965738.jpg'

export default function AboutUsAndMission() {
  return (
    <section className="about-mission-cards-bg">
      <div className="about-mission-row">
        {/* Mission Card */}
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
    To empower clients to access the full potential of digital assets.<br />
    We stand for security, transparency, and sustainable growth.
  </div>
  <ul className="about-mission-list">
    <li>Integrity first—always</li>
    <li>Cutting-edge compliance and innovation</li>
    <li>Client success is our purpose</li>
  </ul>
</div>

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
            BlockFills Advisory FZCO (license No. ______) is a VARA Regulated Virtual Asset Service Provider, to provide Virtual Asset (“VA”) Advisory Services in the Emirate of Dubai (excluding the Dubai International Financial Centre (DIFC)) and also operating out of Dubai, UAE.
          </div>
          <ul className="about-mission-list">
            <li>Licensed and regulated virtual asset advisor</li>
            <li>Deep experience in compliance and technology</li>
            <li>Shaping the future of regulated crypto finance</li>
          </ul>
          <div className="about-mission-footer">
            Discover our story, values, and vision for tomorrow’s global markets.
          </div>
        </div>
      </div>
    </section>
  );
}
