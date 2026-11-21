import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { HiArrowLeft, HiArrowUpRight, HiArrowRight, HiCheckCircle } from "react-icons/hi2"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import projects from "../data/projects"

function ProjectDetail() {
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const project = projectIndex !== -1 ? projects[projectIndex] : null
  const nextProject =
    projectIndex !== -1
      ? projects[(projectIndex + 1) % projects.length]
      : projects[0]

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="case-detail-page">
          <div className="container case-not-found">
            <span className="section-index">404 // NOT FOUND</span>
            <h1 className="case-detail-heading">Case study not found</h1>
            <p className="section-lead">
              The project case study you are looking for does not exist or may
              have been moved.
            </p>
            <div style={{ marginTop: "28px" }}>
              <Link to="/" className="btn primary-btn" id="back-home-404-btn">
                <HiArrowLeft />
                <span>Return to Portfolio</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="case-detail-page">
        <div className="container">
          <div className="case-detail-topbar">
            <Link
              to="/#projects"
              id="case-back-btn"
              className="case-back-link"
            >
              <HiArrowLeft />
              <span>Back to Selected Work</span>
            </Link>

            <span className="case-detail-index">
              CASE STUDY 0{project.id} / 0{projects.length}
            </span>
          </div>

          <motion.header
            className="case-detail-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="case-detail-kicker">
              <span>{project.category}</span>
              <span className="meta-dot">•</span>
              <span>{project.year}</span>
            </div>

            <h1 className="case-detail-heading">{project.title}</h1>
            {project.subtitle && (
              <p className="case-detail-subtitle">{project.subtitle}</p>
            )}

            <div className="case-detail-cta-row">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                id="case-live-demo-btn"
                className="btn primary-btn"
              >
                <span>Launch Live Application</span>
                <HiArrowUpRight />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                id="case-github-btn"
                className="btn secondary-btn"
              >
                <FaGithub />
                <span>Inspect Repository</span>
              </a>
            </div>
          </motion.header>

          <motion.div
            className="case-specs-bar"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="case-spec-cell">
              <span className="case-spec-label">Role</span>
              <p className="case-spec-value">{project.role || "UI Designer & Frontend Developer"}</p>
            </div>
            <div className="case-spec-cell">
              <span className="case-spec-label">Context</span>
              <p className="case-spec-value">{project.client || "Production Web System"}</p>
            </div>
            <div className="case-spec-cell">
              <span className="case-spec-label">Year</span>
              <p className="case-spec-value">{project.year || "2025"}</p>
            </div>
            <div className="case-spec-cell">
              <span className="case-spec-label">Core Technologies</span>
              <p className="case-spec-value">{project.tools.slice(0, 3).join(" • ")}</p>
            </div>
          </motion.div>

          <motion.div
            className="case-hero-showcase"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <div className="browser-mockup browser-mockup-large">
              <div className="browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="browser-url">{project.demo}</span>
                <span className="browser-badge">LIVE PREVIEW</span>
              </div>
              <div className="case-hero-img-wrap">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </motion.div>

          <div className="case-narrative-grid">
            <article className="case-narrative-card case-narrative-wide">
              <span className="narrative-step">01 // EXECUTIVE OVERVIEW</span>
              <h2>Project Context &amp; Architecture</h2>
              <p>{project.overview}</p>
            </article>

            {project.challenge && (
              <article className="case-narrative-card">
                <span className="narrative-step">02 // THE CHALLENGE</span>
                <h2>Operational &amp; UX Problem</h2>
                <p>{project.challenge}</p>
              </article>
            )}

            {project.solution && (
              <article className="case-narrative-card">
                <span className="narrative-step">03 // THE SOLUTION</span>
                <h2>Design &amp; Engineering Approach</h2>
                <p>{project.solution}</p>
              </article>
            )}

            <article className="case-narrative-card">
              <span className="narrative-step">04 // CAPABILITIES</span>
              <h2>Key System Features</h2>
              <ul className="case-feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <HiCheckCircle className="feature-check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="case-narrative-card">
              <span className="narrative-step">05 // OUTCOMES &amp; STACK</span>
              <h2>Impact &amp; Technical Specification</h2>
              {project.impact && (
                <ul className="case-feature-list" style={{ marginBottom: "24px" }}>
                  {project.impact.map((item) => (
                    <li key={item}>
                      <HiCheckCircle className="feature-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="case-study-tags">
                {project.tools.map((tool) => (
                  <span key={tool} className="tech-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>

          {nextProject && (
            <div className="case-next-banner">
              <div>
                <span className="section-index">NEXT CASE STUDY // 0{nextProject.id}</span>
                <h3>{nextProject.title}</h3>
                <p>{nextProject.subtitle}</p>
              </div>
              <Link
                to={`/project/${nextProject.slug}`}
                id="next-case-study-btn"
                className="btn primary-btn"
              >
                <span>View Next Project</span>
                <HiArrowRight />
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ProjectDetail