// Props: title, description, tech (array), category, link
export default function ProjectCard({ title, description, tech, category, link }) {
  return (
    <article className="project-card">
      <span className="tag tag--category">{category}</span>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="tag-row">
        {tech.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
      {/* [Replace "#" with your GitHub or live demo link] */}
      <a className="project-card__link" href={link} target="_blank" rel="noreferrer">
        View project
      </a>
    </article>
  );
}
