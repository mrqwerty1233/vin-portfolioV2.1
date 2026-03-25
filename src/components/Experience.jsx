import { motion } from "framer-motion"

// ✏️  Keep this data accurate — specific numbers and actions are more convincing
//    than generic phrases. Update highlights as your role evolves.
const experiences = [
  {
    period: "Mar 2025 — Present",
    role: "IT Staff / IT Technician / Graphic Designer",
    company: "AVG Office Supply Trading",
    description:
      "Currently supporting daily technical operations and design work in a live business environment — handling hardware, software, networking, and visual communication tasks.",
    highlights: [
      "Maintains and troubleshoots hardware for office workstations",
      "Supports network setup, connectivity, and device configuration",
      "Designs marketing materials, banners, and business documents",
      "Handles a mix of technical support and digital production tasks",
    ],
  },
  {
    period: "Aug 2024 — Nov 2024",
    role: "IT Support",
    company: "Pasig National High School",
    description:
      "Provided hands-on IT support in a school environment, assisting faculty and staff with technical issues and helping maintain the devices used in daily academic operations.",
    highlights: [
      "Diagnosed and resolved hardware and software issues for staff",
      "Assisted with printer, projector, and workstation setup",
      "Maintained device readiness across multiple classrooms",
    ],
  },
  {
    period: "Feb 2024 — May 2024",
    role: "IT Support OJT (486 Hours)",
    company: "Pampanga 1 Electric Cooperative (PELCO1)",
    description:
      "Completed 486 hours of on-the-job training in a professional utility environment, gaining practical experience in workplace IT operations and technical support responsibilities.",
    highlights: [
      "Completed 486 hours of structured OJT in a utility company",
      "Supported IT staff with real workplace tasks and issue resolution",
      "Gained exposure to professional IT operations and support workflows",
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
