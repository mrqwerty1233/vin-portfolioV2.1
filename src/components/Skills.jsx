import { motion } from "framer-motion"

const skills = [
  "IT Support",
  "Troubleshooting",
  "Networking",
  "Server Maintenance",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "C#",
  "Java",
  "Python",
  "Unity Development",
  "Graphic Design",
]

function Skills() {
  return (
    <div className="section-container">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technical Skills & Tools
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        These are the tools and technical areas I currently use across IT
        support, web development, and system-focused projects.
      </motion.p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills