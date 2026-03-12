import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

function Contact() {
  const sendEmail = async (event) => {
    event.preventDefault()

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        event.target,
        "YOUR_PUBLIC_KEY"
      )

      alert("Message sent successfully.")
      event.target.reset()
    } catch (error) {
      alert("Failed to send message. Please try again.")
      console.error(error)
    }
  }

  return (
    <section className="section-container contact-section">
      <motion.div
        className="section-heading-wrap"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Contact</p>

        <h2 className="section-title">
          Let&apos;s Build Something Useful Together
        </h2>

        <p className="section-intro">
          I&apos;m open to opportunities in IT support, web development, and
          practical digital solutions. If you&apos;re looking for someone who
          enjoys solving technical problems and building clean, functional work,
          feel free to reach out.
        </p>
      </motion.div>

      <div className="contact-premium-grid">
        <motion.div
          className="contact-premium-info"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="contact-info-stack">
            <div className="contact-info-premium-card">
              <span>Email</span>
              <h3>your.email@example.com</h3>
              <p>For project inquiries, job opportunities, and collaborations.</p>
            </div>

            <div className="contact-info-premium-card">
              <span>Location</span>
              <h3>Pampanga, Philippines</h3>
              <p>Available for remote work, local opportunities, and freelance projects.</p>
            </div>

            <div className="contact-info-premium-card">
              <span>Focus</span>
              <h3>Web, Support, Systems</h3>
              <p>
                Interested in clean websites, technical support roles, and
                workflow-focused digital solutions.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-premium-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="contact-form-top">
            <span className="contact-form-chip">Send a Message</span>
            <h3>Start a Conversation</h3>
            <p>
              Share a quick message and I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <motion.form
            className="contact-form"
            onSubmit={sendEmail}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="contact-form-row">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about your project or inquiry"
              required
            ></textarea>

            <button className="btn primary-btn" type="submit">
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact