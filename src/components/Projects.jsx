import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import projects from "../data/projects"

function Projects() {
  return (
    <div className="section-container">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Work
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects That Reflect My Systems Thinking
      </motion.h2>

      <div className="projects-grid image-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-image-card"
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} loading="lazy" />

              <div className="project-overlay">
                <div className="project-overlay-content">
                  <div className="project-number">0{project.id}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-buttons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn secondary-btn small-btn"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn primary-btn small-btn"
                    >
                      Live Demo
                    </a>

                    <Link
                      to={`/project/${project.slug}`}
                      className="btn ghost-btn small-btn"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects