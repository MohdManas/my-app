import { useRef } from "react";
import "./App.css";
import Media1 from "./assets/Media1.mp4";
import AboutUs from "./components/AboutUs";
import Peopl from "./components/People";
import Focus from "./components/Focus";
import CustomSegment from "./components/CustomerSegment";
import Contact from "./components/Contact";
import Footer from './components/Footer'; 


export default function App() {
  const refs = {
    about: useRef(null),
    mission: useRef(null),
    people: useRef(null),
    focus: useRef(null),
    custom: useRef(null),
    contact: useRef(null),
  };

  const navItems = [
    { label: "About Us", ref: refs.about },
    { label: "People", ref: refs.people },
    { label: "Focus", ref: refs.focus },
    { label: "Customer Segment", ref: refs.custom },
    { label: "Contact", ref: refs.contact },
  ];

  const handleNav = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      {/* Topbar */}
      <div className="title-bar">
        <div className="logo-area">
          <span className="logo-text">BLOCKFILLS ADVISORY FZCO</span>
        </div>
        <nav className="nav-card-area">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="nav-card"
              tabIndex={0}
              onClick={() => handleNav(item.ref)}
              role="button"
            >
              {item.label}
            </div>
          ))}
        </nav>
      </div>
      {/* Hero Video Banner */}
      <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={Media1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1 className="hero-title">Licensed and Regulated Non-Discretionary <br/> Advisory Services VASP</h1>
        </div>
      </section>
      {/* Main content sections - Centered cards */}
      <main>
        <section ref={refs.about}><AboutUs /></section>
        {/* <section ref={refs.mission}><OurMission /></section> */}
        <section ref={refs.people}><Peopl /></section>
        <section ref={refs.focus}><Focus /></section>
        <section ref={refs.custom}><CustomSegment /></section>
        <section ref={refs.contact}><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
