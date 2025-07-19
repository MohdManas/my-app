// src/components/NavCard.jsx
export default function NavCard({ label, desc, onClick }) {
  return (
    <div className="nav-card" onClick={onClick} tabIndex={0} role="button">
      <h4>{label}</h4>
      <span>{desc}</span>
    </div>
  );
}
