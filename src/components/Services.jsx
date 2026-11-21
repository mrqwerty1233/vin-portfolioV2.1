import { motion } from "framer-motion"
import {
  HiOutlineSwatch,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
} from "react-icons/hi2"

const capabilities = [
  {
    index: "01",
    icon: <HiOutlineSwatch />,
    title: "UI/UX & Web Interface Design",
    subtitle: "Visual Architecture & User Flows",
    description:
      "I design clean, high-contrast web interfaces and brand assets that prioritize readability, intuitive navigation, and responsive structure across desktop and mobile viewports.",
    deliverables: [
      "Editorial & business landing pages",
      "Dashboard & internal tool UI design",
      "Responsive layout systems & typography",
      "Digital marketing & print design assets",
    ],
  },
  {
    index: "02",
    icon: <HiOutlineCommandLine />,
    title: "Frontend & Business Systems",
    subtitle: "React Applications & Operational Tools",
    description:
      "I engineer fast, maintainable frontend applications using React, modern JavaScript, and custom CSS — turning complex spreadsheet or paper workflows into structured digital tools.",
    deliverables: [
      "Single-page applications with React & Vite",
      "Attendance, payroll & job order dashboards",
      "Client-side WebAssembly & AI tool integration",
      "Interactive motion & micro-interactions",
    ],
  },
  {
    index: "03",
    icon: <HiOutlineCpuChip />,
    title: "IT Support & Infrastructure",
    subtitle: "Hardware, Networking & Operational Reliability",
    description:
      "Backed by daily field experience in corporate, educational, and utility environments, I diagnose hardware/software issues, configure networks, and keep workstations running smoothly.",
    deliverables: [
      "Workstation diagnostics & hardware maintenance",
      "LAN/Wi-Fi networking & peripheral configuration",
      "Server upkeep & classroom/office deployment",
      "Structured issue documentation & user support",
    ],
  },
]

function Services() {
  return (
    <div className="section-block services-block">
      <div className="container">
        <motion.div
          className="section-header-grid"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-header-left">
            <span className="section-index">02 // CAPABILITIES</span>
            <h2 className="section-heading">
              Where Visual Design Meets Technical Execution
            </h2>
          </div>

          <p className="section-lead">
            Whether designing a customer-facing website, developing an internal
            operations dashboard, or maintaining office IT infrastructure, I
            focus on clarity, speed, and real-world reliability.
          </p>
        </motion.div>

        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <motion.article
              key={cap.index}
              className="capability-column"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="capability-top">
                <span className="capability-num">{cap.index}</span>
                <div className="capability-icon">{cap.icon}</div>
              </div>

              <p className="capability-subtitle">{cap.subtitle}</p>
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-desc">{cap.description}</p>

              <div className="capability-deliverables">
                <span className="deliverables-heading">Core Deliverables</span>
                <ul>
                  {cap.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services