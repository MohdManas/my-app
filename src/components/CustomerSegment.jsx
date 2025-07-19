import janeImg from "../assets/Team.png";

const segmentCards = [
  "Qualified Investors",
  "Institutional Investors",
  "VARA-Defined Categories",
  "Market Conduct Rulebook"
];

export default function CustomSegment() {
  return (
    <section className="segment-outer">
      <div className="segment-main-card">
        <div className="segment-heading-row">
          <h2 className="segment-title">Custom Segment</h2>
        </div>
        {/* <div className="segment-img-wrap">
          <img src={janeImg} alt="Custom Segment" className="segment-img" />
        </div> */}
        <p className="segment-desc">
          The Firm will only work with Qualified Investors and Institutional Investors, as defined by VARA and Definition provided in Market Conduct Rulebook.
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
