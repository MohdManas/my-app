import janeImg from '../assets/Team.png';

const TEAM_MEMBERS = [
  {
    name: "Nick Hammer",
    role: "Chairperson and Director | Co-Founder & CEO at BlockFills",
    img: janeImg,
    desc: (
      <>
        Nick Hammer serves as Chair of the Board at BlockFills Advisory, where he provides strategic oversight, ensures governance compliance, and represents shareholder interests. A visionary fintech leader, he plays a pivotal role in guiding the firm’s institutional strategy and regulatory direction.
        <br /><br />
        As Co-Founder and CEO of BlockFills, Nick has built one of the world’s premier digital asset liquidity and technology providers. With deep expertise in derivatives trading, risk management, and fintech, he is known for launching and scaling high-growth ventures through strategic innovation and global partnerships.
      </>
    ),
  },
  {
    name: "Demetrios Zamboglou",
    role: "CEO and Resident Director at BlockFills Advisory FZCO",
    img: janeImg,
    desc: (
      <>
        Demetrios Zamboglou serves as CEO and Resident Director at BlockFills Advisory FZCO, where he leads strategic growth, oversees regulatory alignment, and drives operational execution. As a fintech executive, he plays a central role in the firm’s regional expansion and institutional positioning.
<br /><br />
        A former sell-side trader and founder with successful exits, Demetrios has held senior roles at leading institutions and served on the boards of major brokerages. Recognized by Forbes, Entrepreneur, and Arabian Business, he is a Chartered Fellow of the CISI and holds a PhD in Behavioural Finance, blending academic depth with industry leadership in trading and AI.

      </>
    ),
  },
  {
    name: "Niccolo Ghionzoli",
    role: "Resident Director at BlockFills Advisory FZCO",
    img: janeImg,
    desc: (
      <>
        Niccolo Ghionzoli serves as Resident Director at BlockFills Advisory FZCO, where he provides governance oversight, supports regulatory adherence, and contributes to strategic decision-making at the executive level. Leveraging his extensive background as a technologist, he plays a critical role in ensuring the firm’s infrastructure is secure, scalable, and operationally resilient.

        <br /><br />
        As a seasoned technology executive, Niccolo has spearheaded the design and implementation of blockchain-enabled solutions across trading and banking platforms. With a strong foundation in software development and digital infrastructure, he brings strategic technical leadership and cross-industry expertise to advance the firm’s institutional objectives.

      </>
    ),
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
