import { useState } from "react";
import ProjectCard from "./ProjectCard";

// Add, remove, or edit projects here. Keep the same fields.
const projectList = [
  {
    id: 1,
    title: "Compass - OBE System Framework",
    description: "A comprehensive framework for implementing Outcome-Based Education (OBE) principles in educational institutions.",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    category: "Web",
    link: "https://github.com/jzsupsup-clsu/compass", // [Project 1 link]
  },
  {
    id: 2,
    title: "StockFlow",
    description: "A stock management system designed to streamline inventory tracking and order processing for retail businesses.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
    category: "Web",
    link: "https://github.com/jzsupsup-clsu/stockflow", // [Project 2 link]
  },
  {
    id: 3,
    title: "YKJoson Gas & Laundry Centralized System",
    description: "A centralized system for managing the operations of YKJoson Gas & Laundry, including customer management, order tracking, and billing.",
    tech: ["PHP", "Tailwind CSS", "MySQL"],
    category: "Web",
    link: "https://github.com/Tyarlzzz/ykjoson", // [Project 3 link]
  },
];

// The filter buttons. Change categories to match your projects.
const categories = ["All", "Web", "Mobile"];

export default function Projects() {
  // STATE: which category filter is selected
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? projectList
      : projectList.filter((p) => p.category === filter);

  return (
    <section className="page">
      <p className="page__kicker">Projects</p>
      <h2 className="page__title">Things I've built</h2>

      <div className="button-row">
        {categories.map((c) => (
          // EVENT HANDLING: click to change the filter
          <button
            key={c}
            className={`chip ${filter === c ? "is-active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="row g-3 mt-2">
        {visible.map((p) => (
          <div className="col-12 col-lg-6" key={p.id}>
            {/* PROPS: {...p} passes every field to ProjectCard */}
            <ProjectCard {...p} />
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="callout">No projects in this category yet.</p>
      )}
    </section>
  );
}
