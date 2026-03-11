import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <Link to="/" className="logo" onClick={closeMenu}>
        VIN
      </Link>

      <ul className={menuOpen ? "menu active" : "menu"}>
        <li>
          <a href="/#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="/#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>

      <div className="mobile" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  )
}

export default Navbar