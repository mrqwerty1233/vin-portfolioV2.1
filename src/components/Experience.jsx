import { motion } from "framer-motion"

const experiences = [
  {
    index: "01",
    period: "MAR 2025 — PRESENT",
    status: "Current Role",
    role: "IT Staff / IT Technician / Graphic Designer",
    company: "AVG Office Supply Trading",
    location: "Pampanga, Philippines",
    description:
      "Leading daily technical support, workstation maintenance, and commercial graphic design production in a fast-paced retail and office supply operation.",
    highlights: [
      "Diagnose and resolve hardware, OS, and software issues across office workstations and printing equipment",
      "Configure local network connectivity, shared peripherals, and device setups for daily operations",
      "Design commercial marketing collateral, banners, print layouts, and business documents",
      "Maintain structured troubleshooting logs and follow up on pending support items to prevent operational delays",
    ],
    tags: ["IT Support", "Graphic Design", "Hardware Diagnostics", "Network Setup", "Print Production"],
  },
  {
    index: "02",
    period: "AUG 2024 — NOV 2024",
    status: "KALAHI Young Professionals (DSWD)",
    role: "IT Support Specialist",
    company: "Pasig National High School",
    location: "Candaba, Pampanga",
    description:
      "Served under the Department of Social Welfare and Development (DSWD) KALAHI Young Professionals program, providing dedicated campus-wide IT infrastructure and faculty support.",
    highlights: [
      "Supported teachers and administrative staff with daily hardware, software, and classroom AV/projector troubleshooting",
      "Performed local network maintenance and server upkeep to ensure reliable campus connectivity",
      "Prioritized time-sensitive technical requests during active school hours and communicated status updates clearly",
      "Documented reported incidents and resolution steps to streamline recurring maintenance",
    ],
    tags: ["Server Maintenance", "Networking", "Faculty IT Support", "Hardware Troubleshooting", "Documentation"],
  },
  {
    index: "03",
    period: "FEB 2024 — MAY 2024",
    status: "On-the-Job Training (486 Hours)",
    role: "IT Support & Operations Intern",
    company: "Pampanga 1 Electric Cooperative Inc. (PELCO 1)",
    location: "Pampanga, Philippines",
    description:
      "Completed 486 hours of structured enterprise IT internship at a major regional electric utility cooperative, supporting internal technical operations and administrative data workflows.",
    highlights: [
      "Assisted enterprise IT personnel with workstation diagnostics, software configuration, and internal user support tickets",
      "Contributed to financial management record handling and accurate operational documentation",
      "Gained hands-on familiarity with large-scale utility office workflows and enterprise IT standards",
    ],
    tags: ["Enterprise IT OJT", "486 Hours", "Technical Assistance", "Financial Record Support"],
  },
]

function Experience() {
  return (
    <div className="section-block experience-block">
      <div className="container">
        <motion.div
          className="section-header-grid"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-header-left">
            <span className="section-index">05 // EXPERIENCE</span>
            <h2 className="section-heading">
              Career History &amp; Field Operations
            </h2>
          </div>

          <p className="section-lead">
            A verified record of my professional roles across commercial
            business operations, public education infrastructure, and regional
            utility IT systems.
          </p>
        </motion.div>

        <div className="experience-ledger">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              className="experience-row"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="experience-meta-col">
                <div className="experience-period-badge">{item.period}</div>
                <div className="experience-company-block">
                  <span className="experience-status">{item.status}</span>
                  <h4 className="experience-company">{item.company}</h4>
                  <span className="experience-location">{item.location}</span>
                </div>
              </div>

              <div className="experience-detail-col">
                <div className="experience-role-header">
                  <span className="experience-index-num">{item.index}</span>
                  <h3 className="experience-role-title">{item.role}</h3>
                </div>

                <p className="experience-summary">{item.description}</p>

                <ul className="experience-bullet-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="experience-tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
