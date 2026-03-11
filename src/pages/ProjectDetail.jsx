import { Link, useParams } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="section-container project-detail-page">
        <h1>Project not found</h1>
        <p className="contact-text">
          The project you are looking for does not exist.
        </p>
        <Link to="/" className="btn primary-btn">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="section-container">
        <Link to="/" className="btn secondary-btn back-btn">
          ← Back to Home
        </Link>

        <div className="project-detail-hero">
          <div className="project-detail-text">
            <p className="section-label">Project Case Study</p>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="contact-text">{project.overview}</p>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn secondary-btn"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn primary-btn"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="project-detail-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>

        <div className="project-detail-grid">
          <div className="detail-card">
            <h3>Key Features</h3>
            <ul className="detail-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="detail-card">
            <h3>Tools Used</h3>
            <ul className="detail-list">
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail