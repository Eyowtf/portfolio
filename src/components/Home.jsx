import { useState } from "react";
import StatCard from "./StatCard";

// Props: owner (object), onNavigate (function)
export default function Home({ owner, onNavigate }) {
  // STATE: a greeting that changes when the visitor clicks the button
  const [showIntro, setShowIntro] = useState(false);

  // Dashboard numbers. Edit these to match your real info.
  const stats = [
    { value: "4", label: "Projects Completed" },
    { value: "9", label: "Technologies Learned" },
    { value: "4", label: "Years of Study" },
  ];

  return (
    <section className="page">
      <p className="page__kicker">Welcome</p>
      <h1 className="hero-title">
        Hi, I'm {owner.fullName}.<br />
        {/* [One-line statement about what you do, e.g. "I build simple, useful websites."] */}
      </h1>

      <p className="lead-text">
        {/* [Short 2-3 sentence introduction about yourself] */}
        I am a dedicated front-end developer with a solid foundation in HTML, CSS, and JavaScript. I enjoy creating responsive and user-friendly websites that provide an excellent user experience.
      </p>

      <div className="button-row">
        {/* EVENT HANDLING: navigate to another page */}
        <button className="btn-solid" onClick={() => onNavigate("Projects")}>
          View my projects
        </button>
      </div>


      <div className="row g-3 mt-4">
        {stats.map((s, i) => (
          <div className="col-12 col-md-4" key={i}>
            {/* PROPS: sending value and label into StatCard */}
            <StatCard value={s.value} label={s.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
