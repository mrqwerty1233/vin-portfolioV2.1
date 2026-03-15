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
          Let&apos;s Connect and Build Something Useful
        </h2>

        <p className="section-intro">
          I&apos;m open to opportunities in IT support, web development, and
          practical digital work. Whether you have a project, a role, or a
          technical need, feel free to send me a message.
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
              <h3>marlmadronero18@gmail.com</h3>
              <p>For job opportunities, collaborations, and project inquiries.</p>
            </div>

            <div className="contact-info-premium-card">
              <span>Location</span>
              <h3>Pampanga, Philippines</h3>
              <p>Available for remote work, freelance projects, and local opportunities.</p>
            </div>

            <div className="contact-info-premium-card">
              <span>Availability</span>
              <h3>Open to Opportunities</h3>
              <p>
                Interested in IT support roles, development work, and practical
                digital solutions for real business needs.
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
              Share a short message and I&apos;ll respond as soon as I can.
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
              placeholder="Tell me about your project, role, or inquiry"
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