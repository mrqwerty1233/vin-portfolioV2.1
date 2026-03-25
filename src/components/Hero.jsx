import { motion, useScroll, useTransform } from "framer-motion"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import ProfileCard from "./ProfileCard"

function Hero() {
  const { scrollY } = useScroll()

  const yText = useTransform(scrollY, [0, 500], [0, 80])
  const yBackground = useTransform(scrollY, [0, 500], [0, 140])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.25])

  const headingTop = "Building Practical Websites"
  const headingBottom = "& Digital Solutions"

  const letterAnimation = {
    hidden: { opacity: 0, y: 28 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.02,
        duration: 0.4,
      },
    }),
  }

  return (
    <section className="hero">
      <motion.div className="hero-bg-shape shape-one" style={{ y: yBackground }} />
      <motion.div className="hero-bg-shape shape-two" style={{ y: yText }} />
      <motion.div className="hero-bg-shape shape-three" style={{ y: yBackground }} />

      <motion.div className="hero-grid hero-grid-card" style={{ y: yText, opacity }}>
        <div className="hero-content">
          <motion.p
            className="hero-tag"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
                  {letter}
                </motion.span>
              ))}
            </div>

            <div className="hero-title-line hero-title-line-accent">
              {headingBottom.split("").map((letter, index) => (
                <motion.span
                  key={`bottom-${index}`}
                  custom={index + 24}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            I&apos;m Marl Vincent R. Madronero, an IT graduate based in Pampanga,
            Philippines, with hands-on experience in IT support, troubleshooting,
            networking, and web development. I build clean, user-friendly websites
            and practical digital solutions that help improve day-to-day workflows
            and technical reliability.
          </motion.p>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="hero-meta-card">
              <span>Focus</span>
              <p>Web Development • IT Support • Digital Solutions</p>
            </div>

            <div className="hero-meta-card">
              <span>Location</span>
              <p>Pampanga, Philippines</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a href="/resume.pdf" className="btn secondary-btn" download>
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* ✏️  REPLACE the href values below with your actual profile URLs */}
            <a
              href="https://facebook.com/YOUR_FACEBOOK_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com/mrqwerty1233"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>
        </div>

        <div className="hero-profile-area">
          <ProfileCard />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
