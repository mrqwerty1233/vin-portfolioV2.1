import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-premium-top">
        <div className="footer-brand">
          <div className="footer-logo">VIN</div>
          <p className="footer-brand-text">
            Personal portfolio of Marl Vincent R. Madronero — focused on web
            development, IT support, and practical digital solutions.
          </p>
        </div>

        <div className="footer-links-group">
          <span>Navigation</span>
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#services">Services</a>
          <a href="/#experience">Experience</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-links-group">
          <span>Contact</span>
          <p>marlmadronero18@gmail.com</p>
          <p>Pampanga, Philippines</p>
          <p>Open to opportunities</p>
        </div>

        <div className="footer-links-group">
          <span>Socials</span>
          <div className="footer-socials">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-premium-bottom">
        <p>© {new Date().getFullYear()} Marl Vincent R. Madronero</p>
        <p>Built with React, Vite, and Framer Motion</p>
      </div>
    </footer>
  )
}

export default Footer