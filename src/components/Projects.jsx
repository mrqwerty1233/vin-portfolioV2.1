import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import projects from "../data/projects"

function Projects() {
  return (
    <section className="section-container projects-section">
      <motion.div
        className="section-heading-wrap"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Featured Projects</p>

        <h2 className="section-title">
          Projects That Reflect My Design, Development, and System Thinking
        </h2>

        <p className="section-intro">
          These projects showcase how I approach structure, usability, visual
          design, and practical digital solutions for real workflows and user
          needs.
        </p>
      </motion.div>

      <div className="projects-premium-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-premium-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="project-premium-image-wrap">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-premium-overlay" />
              <div className="project-premium-number">0{project.id}</div>
            </div>

            <div className="project-premium-body">
              <div className="project-premium-top">
                <h3>{project.title}</h3>
              </div>

              <p className="project-premium-description">
                {project.description}
              </p>

              <div className="project-premium-tools">
                {project.tools?.slice(0, 4).map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="project-premium-actions">
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
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects