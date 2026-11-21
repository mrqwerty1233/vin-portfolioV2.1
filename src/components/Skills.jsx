import { motion } from "framer-motion"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGitAlt,
  FaNetworkWired,
  FaTools,
  FaPenNib,
  FaLayerGroup,
} from "react-icons/fa"
import { SiJavascript, SiVite, SiFramer, SiUnity } from "react-icons/si"
import { HiOutlineCodeBracket, HiOutlineServerStack } from "react-icons/hi2"

const skillDomains = [
  {
    code: "DOM-01",
    category: "Frontend & UI Engineering",
    summary:
      "Architecting responsive, accessible web applications with modern component patterns, semantic HTML5, and custom CSS design systems.",
    tools: [
      { name: "React 19", role: "UI Components & SPA State", icon: <FaReact /> },
      { name: "JavaScript (ES6+)", role: "DOM Logic & WebAssembly", icon: <SiJavascript /> },
      { name: "CSS3 Architecture", role: "Grid, Flexbox & Design Tokens", icon: <FaCss3Alt /> },
      { name: "HTML5 Semantic UI", role: "Accessible Structure & SEO", icon: <FaHtml5 /> },
      { name: "Vite", role: "Frontend Build & Bundling", icon: <SiVite /> },
      { name: "Framer Motion", role: "Choreographed UI Motion", icon: <SiFramer /> },
    ],
  },
  {
    code: "DOM-02",
    category: "UI/UX & Visual Communication",
    summary:
      "Designing high-clarity user interfaces, operational dashboards, and commercial print/digital graphics with disciplined typography.",
    tools: [
      { name: "UI/UX Layout Systems", role: "Wireframing & Visual Hierarchy", icon: <FaLayerGroup /> },
      { name: "Graphic & Print Design", role: "Banners, IDs & Brand Collateral", icon: <FaPenNib /> },
    ],
  },
  {
    code: "DOM-03",
    category: "Programming & Software Logic",
    summary:
      "Multi-language programming background across object-oriented, scripting, and interactive game/simulation environments.",
    tools: [
      { name: "Python", role: "Scripting & Automation Logic", icon: <FaPython /> },
      { name: "C# & .NET Logic", role: "Object-Oriented Applications", icon: <HiOutlineCodeBracket /> },
      { name: "Java", role: "Core Software Engineering", icon: <FaJava /> },
      { name: "Unity Engine", role: "Interactive 2D/3D Systems", icon: <SiUnity /> },
      { name: "Git & GitHub", role: "Version Control & Releases", icon: <FaGitAlt /> },
    ],
  },
  {
    code: "DOM-04",
    category: "IT Infrastructure & Technical Support",
    summary:
      "Maintaining day-to-day operational continuity across office workstations, local networks, servers, and enterprise peripherals.",
    tools: [
      { name: "Hardware & OS Diagnostics", role: "PC Assembly, Repair & Setup", icon: <FaTools /> },
      { name: "Networking & Connectivity", role: "LAN, Wi-Fi & Device Routing", icon: <FaNetworkWired /> },
      { name: "Server & System Upkeep", role: "Maintenance & Issue Logs", icon: <HiOutlineServerStack /> },
    ],
  },
]

function Skills() {
  return (
    <div className="section-block skills-block">
      <div className="container">
        <motion.div
          className="section-header-grid"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-header-left">
            <span className="section-index">04 // TECHNICAL STACK</span>
            <h2 className="section-heading">
              Disciplines, Languages &amp; Production Toolkit
            </h2>
          </div>

          <p className="section-lead">
            A structured breakdown of the technologies, design disciplines, and
            infrastructure tools I use to design interfaces, ship web
            applications, and support live business operations.
          </p>
        </motion.div>

        <div className="stack-domains-grid">
          {skillDomains.map((domain, idx) => (
            <motion.div
              key={domain.code}
              className="stack-domain-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="stack-domain-header">
                <div className="stack-domain-meta">
                  <span className="mono-index">{domain.code}</span>
                  <h3>{domain.category}</h3>
                </div>
                <p className="stack-domain-summary">{domain.summary}</p>
              </div>

              <div className="stack-tools-grid">
                {domain.tools.map((tool) => (
                  <div key={tool.name} className="stack-tool-cell">
                    <div className="stack-tool-icon" aria-hidden="true">
                      {tool.icon}
                    </div>
                    <div className="stack-tool-info">
                      <h4>{tool.name}</h4>
                      <span>{tool.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills