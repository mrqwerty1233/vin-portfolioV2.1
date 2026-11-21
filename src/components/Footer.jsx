import { FaGithub } from "react-icons/fa"
import { HiArrowUp, HiOutlineEnvelope, HiOutlinePhone, HiArrowDownTray } from "react-icons/hi2"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="brand-logo">
              <span className="brand-monogram">VIN</span>
              <span className="brand-dot" aria-hidden="true">.</span>
            </div>
            <p className="footer-bio">
              Portfolio of <strong>Marl Vincent R. Madronero</strong> — Web
              Designer, Frontend Developer, and IT Specialist crafting clear
              interfaces and reliable operational systems.
            </p>
            <div className="footer-status-line">
              <span className="status-indicator" aria-hidden="true" />
              <span>Based in Candaba, Pampanga, PH • Open to Opportunities</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Index</span>
            <a href="/#home">00 / Home</a>
            <a href="/#projects">01 / Selected Work</a>
            <a href="/#services">02 / Capabilities</a>
            <a href="/#about">03 / Profile</a>
            <a href="/#skills">04 / Technical Stack</a>
            <a href="/#experience">05 / Experience</a>
            <a href="/#contact">06 / Contact</a>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Case Studies</span>
            <a href="/project/cutout-background-remover">CutOut — AI Studio</a>
            <a href="/project/payroll-tracking-system">Payroll Control Suite</a>
            <a href="/project/production-control-system">Production Control UI</a>
            <a href="/resume.pdf" download className="footer-cv-link">
              <HiArrowDownTray /> Download Resume (PDF)
            </a>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Direct Channels</span>
            <a href="mailto:marlmadronero18@gmail.com">
              marlmadronero18@gmail.com
            </a>
            <a href="tel:+639369124592">+63 936 912 4592</a>

            <div className="footer-icon-row">
              <a
                href="https://github.com/mrqwerty1233"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                title="GitHub — mrqwerty1233"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:marlmadronero18@gmail.com"
                aria-label="Send Email"
                title="Email — marlmadronero18@gmail.com"
              >
                <HiOutlineEnvelope />
              </a>
              <a
                href="tel:+639369124592"
                aria-label="Call Phone"
                title="Phone — +63 936 912 4592"
              >
                <HiOutlinePhone />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>
            © {new Date().getFullYear()} Marl Vincent R. Madronero. Crafted with
            React, Vite &amp; Custom CSS Architecture.
          </p>

          <button
            type="button"
            id="footer-back-to-top-btn"
            className="back-to-top-btn"
            onClick={scrollToTop}
          >
            <span>Back to top</span>
            <HiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
