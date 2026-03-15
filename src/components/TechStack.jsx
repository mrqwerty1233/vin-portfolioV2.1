import { motion } from "framer-motion"
import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaCode,
} from "react-icons/fa"
import {
  SiJavascript,
  SiUnity,
} from "react-icons/si"

const stack = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C#", icon: <FaCode /> },
  { name: "Unity", icon: <SiUnity /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
]

function TechStack() {
  return (
    <section className="section-container tech-section">
      <motion.div
        className="section-heading-wrap"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Tech Stack</p>

        <h2 className="section-title">
          Tools and Technologies I Work With
        </h2>

        <p className="section-intro">
          These are the primary technologies and tools I use for development,
          technical troubleshooting, and building practical systems.
        </p>
      </motion.div>

      <div className="tech-grid">
        {stack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="tech-icon">{tech.icon}</div>
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TechStack