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
          I focus on building useful digital solutions that are not only clean
          and modern, but also practical for real-world workflows, business
          needs, and day-to-day operations.
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
            I’m Marl Vincent R. Madronero, also known as Vin. I’m an IT
            graduate from Don Honorio Ventura State University with hands-on
            experience in IT support, troubleshooting, networking, server
            maintenance, web development, programming, and graphic design.
          </p>

          <p>
            My goal is to create digital solutions that are clear, reliable, and
            useful for actual users, teams, and business operations.
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
            I enjoy working on websites, internal tools, dashboards, and
            practical system ideas that improve visibility, structure, and
            productivity.
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
            My background includes technical support roles, OJT experience, and
            real workplace exposure where I handled system issues, hardware
            concerns, user support, and operational tasks.
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
              <p>Troubleshooting, user assistance, and system reliability.</p>
            </div>

            <div className="about-stat-item">
              <h4>Web Development</h4>
              <p>Responsive interfaces, structured layouts, and modern UI work.</p>
            </div>

            <div className="about-stat-item">
              <h4>System Thinking</h4>
              <p>Workflow visibility, practical tools, and organized solutions.</p>
            </div>

            <div className="about-stat-item">
              <h4>Continuous Learning</h4>
              <p>Always improving technical skills and problem-solving ability.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About