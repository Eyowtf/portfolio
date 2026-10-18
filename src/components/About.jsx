import { useState } from "react";

// Props: owner (object)
export default function About({ owner }) {
  // STATE: which tab is open
  const [tab, setTab] = useState("Education");

  const skills = ["PHP", "JavaScript", "HTML", "CSS", "React", "MySQL", "Bootstrap", "Tailwind CSS", "Python"];

  // Each tab has a list of entries. Add or remove entries as needed.
  const timeline = {
    Education: [
      {
        heading: "Bachelor of Science in Information Technology",
        place: "Central Luzon State University",
        years: "2023-Present",
      },
    ],
  };

  return (
    <section className="page">
      <p className="page__kicker">About</p>
      <h2 className="page__title">About {owner.fullName}</h2>

      <p className="lead-text">
        {/* [Write 3-5 sentences about your background, interests, and goals] */}
        I am an aspiring software developer with a passion for creating innovative solutions. I enjoy learning new technologies and applying them to real-world problems. My goal is to contribute to impactful projects that make a difference in people's lives.
      </p>

      <h3 className="section-label">Skills</h3>
      <div className="tag-row">
        {skills.map((s) => (
          <span className="tag tag--big" key={s}>{s}</span>
        ))}
      </div>

      <h3 className="section-label">Background</h3>
      <div className="button-row">
        {Object.keys(timeline).map((name) => (
          <button
            key={name}
            className={`chip ${tab === name ? "is-active" : ""}`}
            onClick={() => setTab(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <ul className="timeline">
        {timeline[tab].map((item, i) => (
          <li key={i}>
            <p className="timeline__heading">{item.heading}</p>
            <p className="timeline__meta">{item.place} · {item.years}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
