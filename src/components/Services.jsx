import { motion } from "framer-motion"

const services = [
  {
    label: "Service 01",
    title: "Web Development",
    description:
      "I build responsive, modern, and easy-to-use websites with clean layouts, structured components, and practical frontend development.",
    points: [
      "Responsive website development",
      "Clean UI structure and usability",
      "Modern layouts for desktop and mobile",
    ],
  },
  {
    label: "Service 02",
    title: "IT Support & Troubleshooting",
    description:
      "I provide technical assistance for hardware, software, and day-to-day system issues while helping improve reliability and user support.",
    points: [
      "Troubleshooting and issue diagnosis",
      "User support and technical assistance",
      "Device setup and operational support",
    ],
  },
  {
    label: "Service 03",
    title: "System-Focused Digital Solutions",
    description:
      "I create practical digital concepts such as dashboards, internal tools, and workflow-based solutions that support organization and efficiency.",
    points: [
      "Internal tools and dashboard ideas",
      "Workflow-oriented digital solutions",
      "Practical systems thinking for business needs",
    ],
  },
]

function Services() {
  return (
    <section className="section-container services-section">
      <motion.div
        className="section-heading-wrap"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Services</p>

        <h2 className="section-title">
          How I Can Help Through Development, Support, and Practical Solutions
        </h2>

        <p className="section-intro">
          I focus on work that is useful, reliable, and clearly structured—
          whether that means building a website, providing technical support, or
          designing a practical digital solution.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="service-card-top">
              <span className="service-label">{service.label}</span>
            </div>

            <h3>{service.title}</h3>

            <p className="service-description">{service.description}</p>

            <div className="service-points">
              {service.points.map((point) => (
                <div key={point} className="service-point">
                  <span className="service-point-dot"></span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Services