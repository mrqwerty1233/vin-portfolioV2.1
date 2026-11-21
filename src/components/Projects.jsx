import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import { HiArrowUpRight, HiArrowRight } from "react-icons/hi2"
import projects from "../data/projects"

function Projects() {
  return (
    <div className="section-block projects-block">
      <div className="container">
        <motion.div
          className="section-header-grid"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-header-left">
            <span className="section-index">01 // SELECTED WORK</span>
            <h2 className="section-heading">
              Featured Case Studies &amp; Digital Products
            </h2>
          </div>

          <p className="section-lead">
            Every project below is a functional, deployed web application built
            to solve a concrete workflow or user experience problem — from
            client-side neural image segmentation to multi-branch production
            and payroll operations.
          </p>
        </motion.div>

        <div className="case-studies-stack">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="case-study-row"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="case-study-visual">
                <div className="browser-mockup">
                  <div className="browser-bar">
                    <div className="browser-dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="browser-url">
                      {project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                    <span className="browser-badge">0{project.id}</span>
                  </div>

                  <Link
                    to={`/project/${project.slug}`}
                    className="browser-screen-link"
                    id={`project-preview-${project.slug}`}
                    aria-label={`View ${project.title} case study`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className="browser-hover-veil">
                      <span className="veil-pill">
                        Inspect Case Study <HiArrowRight />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="case-study-content">
                <div className="case-study-meta-top">
                  <span className="case-study-num">CASE 0{project.id}</span>
                  <span className="meta-dot" aria-hidden="true">•</span>
                  <span className="case-study-category">{project.category}</span>
                  <span className="meta-dot" aria-hidden="true">•</span>
                  <span className="case-study-year">{project.year}</span>
                </div>

                <h3 className="case-study-title">
                  <Link to={`/project/${project.slug}`}>{project.title}</Link>
                </h3>

                {project.subtitle && (
                  <p className="case-study-subtitle">{project.subtitle}</p>
                )}

                <p className="case-study-desc">{project.description}</p>

                {project.impact && (
                  <ul className="case-study-highlights">
                    {project.impact.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}

                <div className="case-study-tags">
                  {project.tools?.map((tool) => (
                    <span key={tool} className="tech-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="case-study-actions">
                  <Link
                    to={`/project/${project.slug}`}
                    id={`project-case-btn-${project.slug}`}
                    className="btn primary-btn small-btn"
                  >
                    <span>Read Case Study</span>
                    <HiArrowRight />
                  </Link>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    id={`project-demo-btn-${project.slug}`}
                    className="btn secondary-btn small-btn"
                  >
                    <span>Live Demo</span>
                    <HiArrowUpRight />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    id={`project-github-btn-${project.slug}`}
                    className="btn ghost-btn small-btn"
                  >
                    <FaGithub />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects