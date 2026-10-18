import { useState } from "react";

// Props: owner (object), pages (array), activePage (string), onNavigate (function)
export default function Sidebar({ owner, pages, activePage, onNavigate }) {
  // STATE: is the menu open on mobile?
  const [open, setOpen] = useState(false);

  // EVENT HANDLING: clicking a nav link
  const handleClick = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  const initials = owner.fullName
    .replace(/[\[\]]/g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <div className="sidebar__top">
        <div className="avatar">
          {owner.photo ? <img src={owner.photo} alt={owner.fullName} /> : initials}
        </div>
        <div>
          <p className="sidebar__name">{owner.fullName}</p>
          <p className="sidebar__role">{owner.title}</p>
        </div>
        <button
          className="sidebar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav className="sidebar__nav">
        {pages.map((page) => (
          <button
            key={page}
            className={`nav-link-custom ${activePage === page ? "is-active" : ""}`}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        ))}
      </nav>
    </aside>
  );
}
