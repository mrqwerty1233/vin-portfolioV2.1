import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { HiArrowUpRight } from "react-icons/hi2"
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      if (!isHome) return
      const sections = ["home", "projects", "services", "about", "skills", "experience", "contact"]
      const scrollPos = window.scrollY + 180

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navLinks = [
    { id: "projects",   label: "Work",       href: "/#projects" },
    { id: "services",   label: "Services",   href: "/#services" },
    { id: "about",      label: "About",      href: "/#about" },
    { id: "skills",     label: "Stack",      href: "/#skills" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "contact",    label: "Contact",    href: "/#contact" },
  ]

  return (
    <header className={`site-header${scrolled ? " site-header-scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="Primary navigation">
        <div className="nav-brand-group">
          <Link to="/" className="brand-logo" onClick={closeMenu} id="nav-brand-link">
            <span className="brand-monogram">VIN</span>
            <span className="brand-dot" aria-hidden="true">.</span>
          </Link>
          <div className="brand-status" title="Available for full-time roles & freelance projects">
            <span className="status-indicator" aria-hidden="true" />
            <span className="status-label">Available for Work</span>
          </div>
        </div>

        <ul className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
          {navLinks.map((link, idx) => {
            const isActive = isHome ? activeSection === link.id : link.id === "projects"
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={isActive ? "nav-link active" : "nav-link"}
                  onClick={closeMenu}
                >
                  <span className="nav-link-num">0{idx + 1}</span>
                  {link.label}
                </a>
              </li>
            )
          })}
          <li className="nav-mobile-cta">
            <a href="/resume.pdf" download className="btn secondary-btn small-btn" onClick={closeMenu}>
              Download CV
            </a>
            <a href="/#contact" className="btn primary-btn small-btn" onClick={closeMenu}>
              Start a Project <HiArrowUpRight />
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <a
            href="/#contact"
            id="nav-cta-btn"
            className="btn primary-btn nav-cta-desktop"
          >
            <span>Let&apos;s Talk</span>
            <HiArrowUpRight />
          </a>

          <button
            id="nav-mobile-toggle"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
