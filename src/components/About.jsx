import { motion } from "framer-motion"

function About() {
  return (
    <div className="section-container about-section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        I Build Practical IT and Web Solutions for Real Business Needs
      </motion.h2>

      <div className="about-grid">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Who I Am</h3>
          <p>
            I’m Marl Vincent R. Madronero, also known as Vin. I graduated with a
            Bachelor of Science in Information Technology from Don Honorio
            Ventura State University in 2024. My background includes IT support,
            technical troubleshooting, networking, server maintenance, web
            development, programming, and graphic design.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>What I Focus On</h3>
          <p>
            I enjoy building systems that solve actual operational problems. My
            focus is on internal tools, dashboards, workflow visibility,
            automation-ready web systems, and user-friendly digital solutions
            that help teams work more efficiently and make better decisions.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Experience Snapshot</h3>
          <p>
            I have worked in IT support roles across different environments,
            including educational institutions, utility-related OJT experience,
            and my current role involving IT staff responsibilities, technical
            support, and graphic design work. These experiences strengthened my
            ability to solve issues quickly and support daily operations.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Tools & Skills</h3>
          <p>
            My technical skills include HTML, CSS, JavaScript, C#, Java, Python,
            networking, troubleshooting, server maintenance, Unity development,
            and modern web design. I aim to combine technical reliability with
            clean, professional user experience.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About