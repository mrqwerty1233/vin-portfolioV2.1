import { motion, useScroll, useTransform } from "framer-motion"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"

function Hero() {
  const { scrollY } = useScroll()

  const yText = useTransform(scrollY, [0, 500], [0, 110])
  const yBackground = useTransform(scrollY, [0, 500], [0, 160])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2])

  const headingTop = "Building Reliable Systems"
  const headingBottom = "That Improve Operations"

  const letterAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.025,
        duration: 0.45,
      },
    }),
  }

  return (
    <div className="hero">
      <motion.div
        className="hero-bg-shape shape-one"
        style={{ y: yBackground }}
      />

      <motion.div
        className="hero-bg-shape shape-two"
        style={{ y: yText }}
      />

      <motion.div
        className="hero-bg-shape shape-three"
        style={{ y: yBackground }}
      />

      <motion.div className="hero-grid" style={{ y: yText, opacity }}>
        <div className="hero-content">
          <motion.p
            className="hero-tag"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I&apos;m Vin
          </motion.p>

          <div className="hero-title premium-title">
            <div className="hero-title-line">
              {headingTop.split("").map((letter, index) => (
                <motion.span
                  key={`top-${index}`}
                  custom={index}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            <div className="hero-title-line hero-title-line-accent">
              {headingBottom.split("").map((letter, index) => (
                <motion.span
                  key={`bottom-${index}`}
                  custom={index + 20}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            I&apos;m Marl Vincent R. Madronero, an IT graduate from the
            Philippines specializing in troubleshooting, IT support,
            networking, web development, and business-focused systems.
          </motion.p>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="hero-meta-card">
              <span>Focus</span>
              <p>IT Support • Systems • Web Solutions</p>
            </div>

            <div className="hero-meta-card">
              <span>Based In</span>
              <p>Pampanga, Philippines</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="/resume.pdf" className="btn secondary-btn" download>
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
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
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          <div className="hero-image-badge hero-image-badge-top">
            Available for opportunities
          </div>

          <div className="hero-image-frame">
            <img src="/images/profile.jpg" alt="Vin portrait" />
          </div>

          <div className="hero-image-badge hero-image-badge-bottom">
            IT Support • Web • Systems
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero