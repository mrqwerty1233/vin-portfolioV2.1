import { motion } from "framer-motion"

function About() {
  return (
    <section className="section-container about-section">
      <motion.div
        className="section-heading-wrap"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-label">About Me</p>

        <h2 className="section-title">
          Practical IT Support, Web Development, and System-Focused Thinking
        </h2>

        <p className="section-intro">
          I enjoy building useful digital solutions that combine clean design,
          technical reliability, and practical value for real workflows and
          daily operations.
        </p>
      </motion.div>

      <div className="about-premium-grid">
        <motion.div
          className="about-feature-card about-feature-card-large"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="about-card-top">
            <span className="about-chip">Profile</span>
          </div>

          <h3>Who I Am</h3>

          <p>
            I’m Marl Vincent R. Madronero, also known as Vin. I graduated with a
            Bachelor of Science in Information Technology from Don Honorio
            Ventura State University in 2024.
          </p>

          <p>
            My background includes IT support, technical troubleshooting,
            networking, server maintenance, web development, programming, Unity
            development, and graphic design. I like creating work that is clear,
            professional, and useful in real situations.
          </p>
        </motion.div>

        <motion.div
          className="about-feature-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="about-card-top">
            <span className="about-chip">Focus</span>
          </div>

          <h3>What I Build</h3>

          <p>
            I focus on websites, internal tools, dashboards, and system ideas
            that help improve organization, usability, visibility, and workflow
            efficiency.
          </p>
        </motion.div>

        <motion.div
          className="about-feature-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="about-card-top">
            <span className="about-chip">Experience</span>
          </div>

          <h3>Hands-On Background</h3>

          <p>
            I’ve worked in IT-related environments including school-based support,
            utility-related OJT experience, and my current role as IT Staff at
            AVG Office Supply Trading, where I handle technical support and other
            digital tasks.
          </p>
        </motion.div>

        <motion.div
          className="about-stats-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <h4>IT Support</h4>
              <p>Troubleshooting, user assistance, and technical reliability.</p>
            </div>

            <div className="about-stat-item">
              <h4>Web Development</h4>
              <p>Responsive interfaces, structured layouts, and modern web work.</p>
            </div>

            <div className="about-stat-item">
              <h4>System Thinking</h4>
              <p>Practical tools, workflow visibility, and organized solutions.</p>
            </div>

            <div className="about-stat-item">
              <h4>Continuous Learning</h4>
              <p>Always improving skills, design quality, and problem-solving.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About