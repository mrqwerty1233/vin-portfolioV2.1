import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add shadow/style change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // Trimmed from 8 items to 6 — Tech & Services are folded into Skills/About
  const navLinks = [
    { label: "Home",       href: "/#home" },
    { label: "About",      href: "/#about" },
    { label: "Skills",     href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects",   href: "/#projects" },
    { label: "Contact",    href: "/#contact" },
  ]

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}`}>
      <Link to="/" className="logo" onClick={closeMenu}>
        VIN
      </Link>

      <ul className={menuOpen ? "menu active" : "menu"}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Clean icon toggle instead of raw ☰ character */}
      <div
        className="mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>
    </nav>
  )
}

export default Navbar
