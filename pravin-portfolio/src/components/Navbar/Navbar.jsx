import React, { useEffect, useState } from "react";
import "./Navbar.css";

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") === "dark";
  });

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [darkTheme]);

  const isScrollingRef = React.useRef(false);
  const scrollTimerRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const navbarHeight = 90;
      const scrollPosition = window.scrollY + navbarHeight + 20;

      let currentSection = "home";
      let minDistance = Infinity;

      navigationItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const distance = scrollPosition - sectionTop;
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = item.id;
            }
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight = window.innerWidth <= 850 ? 70 : 75;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = sectionPosition - navbarHeight;

      isScrollingRef.current = true;
      clearTimeout(scrollTimerRef.current);

      setActiveSection(sectionId);

      window.scrollTo({ top: scrollPosition, behavior: "smooth" });

      scrollTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }

    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkTheme((previousTheme) => !previousTheme);
  };

  const toggleMenu = () => {
    setMenuOpen((previousMenu) => !previousMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          type="button"
          className="navbar-logo"
          onClick={() => scrollToSection("home")}
        >
          Pravin<span> R</span>
        </button>

        <div className="navbar-actions">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={
                    activeSection === item.id
                      ? "nav-button active-link"
                      : "nav-button"
                  }
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              darkTheme
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              darkTheme
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {darkTheme ? "☀" : "☾"}
          </button>

          <button
            type="button"
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;