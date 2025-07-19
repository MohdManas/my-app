// RiskDisclaimer.jsx
import React from 'react';
import disclaimerImg from '../assets/Team.png' // ✅ Make sure to place your image at this path

export default function RiskDisclaimer() {
  return (
    <section className="risk-disclaimer-section">
      <header className="risk-disclaimer-header">
        <h2>Risk Disclaimer</h2>
      </header>

      <div className="risk-disclaimer-body">
        {/* Image at the top */}
        <img
          src={disclaimerImg}
          alt="Risk Disclaimer Graphic"
          className="risk-disclaimer-image"
        />

        {/* Content below image */}
        <p className="risk-disclaimer-text">
          The content of this material is for Qualified Investor and institutional clients only.
          It is not directed to Retail Clients or residents of any jurisdiction where VA Digital
          Advisory Assets trading is restricted or prohibited by local laws or regulations.
        </p>
      </div>
    </section>
  );
}
