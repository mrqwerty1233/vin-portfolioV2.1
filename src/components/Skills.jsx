import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Programming",
    items: ["Python", "Java", "C#"],
  },
  {
    title: "IT & Systems",
    items: ["Troubleshooting", "IT Support", "Networking", "Server Maintenance"],
  },
  {
    title: "Creative Tools",
    items: ["Graphic Design", "UI Thinking", "Portfolio Design", "Unity"],
  },
]

function Skills() {
  return (
    <section className="section-container skills-section">
      <motion.div
        className="section-heading-wrap"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Skills</p>

        <h2 className="section-title">
          Technical Skills and Tools I Use Across Support and Development
        </h2>

        <p className="section-intro">
          These are the technical areas I use when building websites, solving
          technical problems, and creating practical digital solutions.
        </p>
      </motion.div>

      <div className="skills-premium-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            className="skills-group-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="skills-group-head">
              <span className="skills-group-label">Category</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skills-chip-grid">
              {group.items.map((item) => (
                <span key={item} className="skill-premium-chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills