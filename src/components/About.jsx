import { motion } from "framer-motion"

const principles = [
  {
    num: "01",
    title: "Function-First Visual Hierarchy",
    body: "Every typographic scale, spacing token, and contrast decision serves a purpose: helping users scan information and complete tasks without friction.",
  },
  {
    num: "02",
    title: "Grounded in Real Operations",
    body: "Working directly with office staff, teachers, and technicians taught me how people actually interact with software under daily time pressure.",
  },
  {
    num: "03",
    title: "Clean Component Architecture",
    body: "I write modular React and custom CSS without bloated dependencies, ensuring fast load times, smooth responsiveness, and easy long-term maintenance.",
  },
  {
    num: "04",
    title: "Thorough Documentation & Follow-Through",
    body: "Whether resolving an IT support ticket or shipping a web interface, I document edge cases clearly and verify solutions end-to-end.",
  },
]

function About() {
  return (
    <div className="section-block about-block">
      <div className="container">
        <motion.div
          className="section-header-grid"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-header-left">
            <span className="section-index">03 // PROFILE &amp; PHILOSOPHY</span>
            <h2 className="section-heading">
              A Web Designer &amp; Developer Who Understands the Workplace Floor
            </h2>
          </div>

          <p className="section-lead">
            Great digital tools aren&apos;t built in a vacuum. My background blends
            modern UI/UX web design and frontend development with hands-on IT
            support and graphic production.
          </p>
        </motion.div>

        <div className="about-editorial-layout">
          <motion.div
            className="about-narrative-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <h3 className="about-narrative-title">
              Bridging visual craft with practical systems thinking.
            </h3>

            <p className="about-paragraph">
              I&apos;m <strong>Marl Vincent R. Madronero</strong> (Vin), an
              Information Technology graduate from{" "}
              <strong>Don Honorio Ventura State University (Class of 2024)</strong>{" "}
              based in Candaba, Pampanga.
            </p>

            <p className="about-paragraph">
              Across my work at <strong>AVG Office Supply Trading</strong>,{" "}
              <strong>Pasig National High School</strong>, and{" "}
              <strong>Pampanga 1 Electric Cooperative (PELCO 1)</strong>, I&apos;ve
              seen firsthand how much time organizations lose to clunky interfaces,
              manual spreadsheets, and preventable technical bottlenecks.
            </p>

            <p className="about-paragraph">
              That perspective drives how I design and build for the web. I craft
              interfaces that look refined and authoritative while remaining
              effortlessly clear for everyday users—whether it&apos;s an AI background
              removal studio for print workflows or an internal payroll and
              production tracker.
            </p>

            <div className="about-education-ledger">
              <div className="ledger-header">
                <span className="mono-index">ACADEMIC CREDENTIALS</span>
              </div>
              <div className="ledger-item">
                <div>
                  <h4>Bachelor of Science in Information Technology</h4>
                  <p>Don Honorio Ventura State University (DHVSU)</p>
                </div>
                <span className="ledger-year">Graduated 2024</span>
              </div>
              <div className="ledger-item">
                <div>
                  <h4>Senior High School — General Academic Strand (GAS)</h4>
                  <p>Pasig National High School, Candaba, Pampanga</p>
                </div>
                <span className="ledger-year">2017 — 2019</span>
              </div>
            </div>
          </motion.div>

          <div className="about-principles-col">
            <div className="principles-list">
              {principles.map((item, idx) => (
                <motion.div
                  key={item.num}
                  className="principle-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.45 }}
                  viewport={{ once: true }}
                >
                  <span className="principle-num">{item.num}</span>
                  <div className="principle-copy">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About