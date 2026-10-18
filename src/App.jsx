import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

// ---------- YOUR BASIC INFO (edit once, used across the site) ----------
const owner = {
  fullName: "Jose Val Eowyn G. Laurente",
  title: "Aspiring Front-End Developer",
  photo: "/Profile.jpg", // [Path to your photo, e.g. "/me.jpg" (put the file in /public). Leave "" to show your initials]
};

const PAGES = ["Home", "Projects", "About", "Contact"];

export default function App() {
  // STATE: which page is currently visible
  const [activePage, setActivePage] = useState("Home");

  // Decide which page component to show
  const renderPage = () => {
    switch (activePage) {
      case "Projects":
        return <Projects />;
      case "About":
        return <About owner={owner} />;
      case "Contact":
        return <Contact />;
      default:
        return <Home owner={owner} onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="app-shell">
      {/* PROPS: we pass data and a function down to Sidebar */}
      <Sidebar
        owner={owner}
        pages={PAGES}
        activePage={activePage}
        onNavigate={setActivePage}
      />
      <main className="app-main">{renderPage()}</main>
    </div>
  );
}
