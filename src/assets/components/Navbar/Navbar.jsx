import { useEffect, useState } from "react";
import "./Navbar.css";
import { navLinks } from "../../../data/navLinks.js";
import LangToggle from "../LangTogle/LangToggle.jsx";

const Navbar = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.55, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className={isOpen ? "nav nav--open" : "nav"}>
      <div className="nav-logo">
        dev<span>.</span>portfolio
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="nav-links" id="primary-navigation">
        {navLinks.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={activeSection === id ? "nav-link nav-link--active" : "nav-link"}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label[lang]}
            </a>
          </li>
        ))}
        <li>
          <LangToggle lang={lang} setLang={setLang} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
