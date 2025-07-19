import janeImg from "../assets/Team.png";

const segmentCards = [
  "Qualified Investors",
  " Family offices",
  "Corporates",
  "High net worth individuals, meeting Qualifying Investor criteria"
];

export default function CustomSegment() {
  return (
    <section className="segment-outer">
      <div className="segment-main-card">
        <div className="segment-heading-row">
          <h2 className="segment-title">Custom Segment</h2>
        </div>
        <div className="segment-img-wrap">
          <img src={janeImg} alt="Custom Segment" className="segment-img" />
        </div>
        <p className="segment-desc">
          The content of this material is for Qualified Investor and institutional clients only. It is not directed to Retail Clients or residents of any jurisdiction where VA Digital Advisory Assets trading is restricted or prohibited by local laws or regulations.
        </p>
        <div className="segment-card-grid">
          {segmentCards.map((item, idx) => (
            <div className="segment-mini-card" key={idx}>
              <span className="segment-mini-card-label">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
