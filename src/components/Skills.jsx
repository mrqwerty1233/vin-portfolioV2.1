import { motion } from "framer-motion"

const skillBars = [
  {
    title: "Web Development",
    level: 88,
    description: "Building responsive interfaces, structured layouts, and modern frontend experiences.",
  },
  {
    title: "IT Support & Troubleshooting",
    level: 90,
    description: "Diagnosing issues, assisting users, and maintaining reliable day-to-day technical operations.",
  },
  {
    title: "Programming",
    level: 80,
    description: "Working with JavaScript, Python, Java, and C# for practical academic and personal projects.",
  },
  {
    title: "Networking & Systems",
    level: 76,
    description: "Handling networking basics, system setup, maintenance, and technical support responsibilities.",
  },
]

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
          Technical Strengths Across Support, Development, and Practical Systems
        </h2>

        <p className="section-intro">
          These are the technical areas I rely on when building websites, solving
          technical issues, and creating useful digital solutions for real-world needs.
        </p>
      </motion.div>

      <div className="skills-visual-grid">
        <motion.div
          className="skills-bars-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="skills-card-top">
            <span className="skills-chip">Overview</span>
          </div>

          <h3 className="skills-visual-title">Core Skill Areas</h3>

          <div className="skills-bars-list">
            {skillBars.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="skill-bar-item"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
              >
                <div className="skill-bar-head">
                  <div>
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </div>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
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
      </div>
    </section>
  )
}

export default Skills