import { useState } from "react";

export default function Contact() {
  // STATE: form values, error message, and submitted flag
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  // EVENT HANDLING: runs every time the user types
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  // EVENT HANDLING: runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    if (!form.name.trim() || !form.email.includes("@") || !form.message.trim()) {
      setError("Please enter your name, a valid email, and a message.");
      return;
    }
    setError("");
    setSent(true);
    console.log("Form data:", form); // later you can send this to a backend
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="page">
      <p className="page__kicker">Contact</p>
      <h2 className="page__title">Let's talk</h2>

      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <ul className="contact-list">
            <li><strong>Email</strong><br />josevaleowyn.laurente@clsu2.edu.ph</li>
            <li><strong>Phone</strong><br />+63 935-923-2950</li>
            <li><strong>Location</strong><br />San Miguel, Bulacan, Philippines</li>
            <li><strong>GitHub</strong><br />https://github.com/Eyowtf</li>
          </ul>
        </div>

        <div className="col-12 col-lg-7">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} />

            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />

            {error && <p className="form-error" role="alert">{error}</p>}
            {sent && <p className="form-success" role="status">Message sent. Thank you!</p>}

            <button type="submit" className="btn-solid">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
