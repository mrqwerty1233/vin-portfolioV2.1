import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { HiArrowUpRight, HiArrowDownTray, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2"
import ProfileCard from "./ProfileCard"

const heroMetrics = [
  {
    value: "03+",
    label: "Live Web Systems",
    detail: "Deployed on Vercel & Render",
  },
  {
    value: "BSIT '24",
    label: "Academic Foundation",
    detail: "Don Honorio Ventura State Univ.",
  },
  {
    value: "486 hrs",
    label: "Utility IT Field Training",
    detail: "PELCO 1 + DSWD KALAHI Program",
  },
  {
    value: "100%",
    label: "End-to-End Ownership",
    detail: "UI Design, Frontend & IT Ops",
  },
]

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-ambient-light" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-main-col">
          <motion.div
            className="hero-index-line"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="mono-index">00 // STUDIO PORTFOLIO</span>
            <span className="index-divider" aria-hidden="true" />
            <span className="mono-sub">UI/UX DESIGN • FRONTEND • IT SYSTEMS</span>
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Designing clarity into{" "}
            <span className="headline-serif-italic">web interfaces</span> &amp;
            operational business systems.
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            I&apos;m <strong>Marl Vincent R. Madronero (Vin)</strong> — a Web Designer,
            Frontend Developer, and IT Specialist based in Pampanga, Philippines.
            I combine clean visual hierarchy and modern React architecture with
            hands-on workplace IT troubleshooting to build websites and internal
            tools that teams actually enjoy using.
          </motion.p>

          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <a href="#projects" id="hero-explore-work-btn" className="btn primary-btn">
              <span>Explore Selected Work</span>
              <HiArrowUpRight />
            </a>

            <a
              href="/resume.pdf"
              download
              id="hero-download-resume-btn"
              className="btn secondary-btn"
            >
              <HiArrowDownTray />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-quick-links"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            <a
              href="https://github.com/mrqwerty1233"
              target="_blank"
              rel="noreferrer"
              id="hero-github-link"
              className="quick-channel-link"
            >
              <FaGithub />
              <span>github.com/mrqwerty1233</span>
            </a>

            <a
              href="mailto:marlmadronero18@gmail.com"
              id="hero-email-link"
              className="quick-channel-link"
            >
              <HiOutlineEnvelope />
              <span>marlmadronero18@gmail.com</span>
            </a>

            <a
              href="tel:+639369124592"
              id="hero-phone-link"
              className="quick-channel-link"
            >
              <HiOutlinePhone />
              <span>+63 936 912 4592</span>
            </a>
          </motion.div>
        </div>

        <div className="hero-aside-col">
          <ProfileCard />
        </div>
      </div>

      <div className="container">
        <motion.div
          className="hero-metrics-strip"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
        >
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="hero-metric-cell">
              <div className="hero-metric-value">{metric.value}</div>
              <div className="hero-metric-label">{metric.label}</div>
              <div className="hero-metric-detail">{metric.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
