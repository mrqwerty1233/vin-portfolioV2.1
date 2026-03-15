import { motion } from "framer-motion"

const experiences = [
  {
    period: "Mar 2025 — Present",
    role: "IT Staff / IT Technician / Graphic Designer",
    company: "AVG Office Supply Trading",
    description:
      "Currently supporting daily technical operations through troubleshooting, device assistance, digital tasks, and general IT-related support in a real workplace environment.",
    highlights: [
      "Provides day-to-day technical support",
      "Helps resolve hardware and software issues",
      "Supports operational needs through digital tasks",
      "Handles both technical and design-related responsibilities",
    ],
  },
  {
    period: "Aug 2024 — Nov 2024",
    role: "IT Support",
    company: "Pasig National High School",
    description:
      "Provided IT support in a school environment by assisting users, handling technical concerns, and helping maintain devices and systems used in daily operations.",
    highlights: [
      "Supported users with technical issues",
      "Helped maintain device readiness",
      "Assisted with troubleshooting and issue diagnosis",
    ],
  },
  {
    period: "Feb 2024 — May 2024",
    role: "IT Support OJT (486 Hours)",
    company: "Pampanga 1 Electric Cooperative (PELCO1)",
    description:
      "Completed 486 hours of on-the-job training focused on IT support, practical workplace systems, and exposure to technical operations in a professional environment.",
    highlights: [
      "Completed 486 hours of practical OJT experience",
      "Supported real workplace IT tasks and processes",
      "Strengthened troubleshooting and support fundamentals",
    ],
  },
]

function Experience() {
  return (
    <section className="section-container experience-section">
      <motion.div
        className="section-heading-wrap"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Experience</p>

        <h2 className="section-title">
          Hands-On Experience in IT Support, Technical Assistance, and Digital Work
        </h2>

        <p className="section-intro">
          My background includes workplace and field experience where I supported
          users, solved technical issues, and contributed to daily operations
          through practical IT work.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            className="experience-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="experience-left">
              <span className="experience-period">{item.period}</span>
              <div className="experience-line-dot"></div>
            </div>

            <div className="experience-right">
              <div className="experience-top">
                <span className="experience-chip">Professional Experience</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
              </div>

              <p className="experience-description">{item.description}</p>

              <div className="experience-highlights">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="experience-highlight">
                    <span className="experience-highlight-dot"></span>
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Experience