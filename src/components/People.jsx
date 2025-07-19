import janeImg from '../assets/Team.png';

const TEAM_MEMBERS = [
  {
    name: "Nick Hammer",
    role: "Chairperson | CEO",
    img: janeImg,
    desc: "Strategic leader guiding BlockFills in digital asset innovation.",
  },
  {
    name: "Alex Chen",
    role: "CTO",
    img: janeImg,
    desc: "Expert in fintech product development and blockchain engineering.",
  },
  {
    name: "Priya Singh",
    role: "COO",
    img: janeImg,
    desc: "Operational excellence and global partnership strategy leader.",
  },
];

export default function Peopl() {
  return (
    <section className="people-main-section">
      <h1 className="team-title" style={{ textAlign: "center" }}>Our Team</h1>
      <div className="team-list">
        {TEAM_MEMBERS.map((member, idx) => (
          <div className="team-list-card" key={idx}>
            <img src={member.img} alt={member.name} className="team-list-img" />
            <div className="team-list-content">
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <div className="team-desc">{member.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
