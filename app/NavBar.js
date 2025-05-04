"use client";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Function to handle smooth scrolling and hiding the URL
  const handleNavClick = (e, targetId, offset = 0) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const topPosition =
        targetElement.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });

      // Update browser history state without changing the URL
      window.history.pushState(null, "", " ");
    }

    closeMenu(); // Close menu after navigation
  };

  return (
    <div id="nav">
      <Image
        src="/images/portLogo.png"
        alt="khubaib."
        width={200}
        height={80}
        style={{ height: "auto" }}
        unoptimized
      />

      {/* Desktop navlinks (visible on large screens) */}
      <div id="navlinks">
        <a href="#page1" onClick={(e) => handleNavClick(e, "#page1")}>
          Home
        </a>
        <a href="#page2" onClick={(e) => handleNavClick(e, "#page2")}>
          About
        </a>
        <a
          href="#page2 .skills"
          onClick={(e) => handleNavClick(e, "#page2 .skills", -150)} 
        >
          Skills
        </a>
        <a href="#education" onClick={(e) => handleNavClick(e, "#education", 100)}>
          Education
        </a>
        <a href="#page3" onClick={(e) => handleNavClick(e, "#page3")}>
          Projects
        </a>
        <a href="#page4" onClick={(e) => handleNavClick(e, "#page4", -20)}>
          Achievements
        </a>
        <a href="#footer" onClick={(e) => handleNavClick(e, "#footer")}>
          Contact
        </a>
        <a
          className="resume"
          target="_blank"
          href="https://drive.google.com/file/d/1h9RQW_XNarLU7EEYeaea0BMrB_WtP_GO/view"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>

      {/* Hamburger icon (visible on small screens) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`menu-backdrop ${menuOpen ? "showBackdrop" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile nav container (shows when hamburger clicked) */}
      <div id="mobileNavLinks" className={menuOpen ? "showMenu" : ""}>
        <a href="#page1" onClick={(e) => handleNavClick(e, "#page1")}>
          Home
        </a>
        <a href="#page2" onClick={(e) => handleNavClick(e, "#page2")}>
          About
        </a>
        <a
          href="#page2 .skills"
          onClick={(e) => handleNavClick(e, "#page2 .skills", -150)}
        >
          Skills
        </a>
        <a href="#education" onClick={(e) => handleNavClick(e, "#education", 100)}>
          Education
        </a>
        <a href="#page3" onClick={(e) => handleNavClick(e, "#page3")}>
          Projects
        </a>
        <a href="#page4" onClick={(e) => handleNavClick(e, "#page4", -50)}>
          Achievements
        </a>
        <a href="#footer" onClick={(e) => handleNavClick(e, "#footer")}>
          Contact
        </a>
        <a
          className="resume"
          target="_blank"
          href="https://drive.google.com/file/d/1h9RQW_XNarLU7EEYeaea0BMrB_WtP_GO/view"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
