import { useState } from "react"
import { motion } from "framer-motion"
import { HiOutlineCheck, HiOutlineClipboardDocument, HiArrowUpRight } from "react-icons/hi2"

function ProfileCard() {
  const [copied, setCopied] = useState(false)
  const email = "marlmadronero18@gmail.com"

  const copyEmail = () => {
    navigator.clipboard?.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <motion.aside
      className="dossier-card"
      aria-label="Designer Profile Dossier"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="dossier-header">
        <span className="dossier-code">ID // MVM-2025</span>
        <span className="dossier-location">PAMPANGA, PH</span>
      </div>

      <div className="dossier-portrait-stage">
        <div className="dossier-portrait-glow" aria-hidden="true" />
        <img
          src="/images/profile-cutout.png"
          alt="Marl Vincent R. Madronero — Web Designer and Systems Developer"
          className="dossier-portrait-img"
        />
        <div className="dossier-portrait-tag">
          <span>BSIT &apos;24 • DHVSU</span>
        </div>
      </div>

      <div className="dossier-body">
        <div className="dossier-identity">
          <p className="dossier-kicker">WEB DESIGNER &amp; IT SPECIALIST</p>
          <h2 className="dossier-name">Marl Vincent R. Madronero</h2>
          <p className="dossier-role-note">
            Currently IT Staff &amp; Graphic Designer at{" "}
            <strong>AVG Office Supply Trading</strong>
          </p>
        </div>

        <div className="dossier-specs">
          <div className="dossier-spec-row">
            <span className="spec-key">Core Craft</span>
            <span className="spec-val">UI/UX Design &amp; React Systems</span>
          </div>
          <div className="dossier-spec-row">
            <span className="spec-key">Operations</span>
            <span className="spec-val">IT Support &amp; Network Infra</span>
          </div>
        </div>

        <div className="dossier-footer-actions">
          <button
            type="button"
            id="dossier-copy-email-btn"
            className="dossier-email-btn"
            onClick={copyEmail}
            title="Copy email address"
          >
            {copied ? (
              <>
                <HiOutlineCheck className="icon-accent" />
                <span>Copied Email Address</span>
              </>
            ) : (
              <>
                <HiOutlineClipboardDocument />
                <span>{email}</span>
              </>
            )}
          </button>

          <a
            href="/resume.pdf"
            download
            id="dossier-cv-link"
            className="dossier-cv-btn"
            title="Download Resume PDF"
          >
            <span>CV</span>
            <HiArrowUpRight />
          </a>
        </div>
      </div>
    </motion.aside>
  )
}

export default ProfileCard