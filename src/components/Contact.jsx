import { useState } from "react";
import janeImg from "../assets/Team.png";

export default function Contact() {
  const [inputs, setInputs] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputs.name}\nEmail: ${inputs.email}`);
  };

  return (
    <div className="center-section">
      <div className="people-card-flex">
        <div className="people-img-cover">
          <img src={janeImg} alt="Contact" className="people-img" />
        </div>
        <div className="people-content">
          <div className="people-left-heading">Contact Us</div>
          <form className="contact-form-modern" onSubmit={handleSubmit} autoComplete="off">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
