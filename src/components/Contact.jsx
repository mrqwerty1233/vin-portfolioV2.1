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
    <div className="section-container contact-section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Let’s Build Something Useful Together
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        I’m open to opportunities in IT support, web development, internal
        systems, and workflow-driven business solutions.
      </motion.p>

      <motion.div
        className="contact-info-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="contact-info-card">
          <span>Email</span>
          <p>your.email@example.com</p>
        </div>

        <div className="contact-info-card">
          <span>Location</span>
          <p>Pampanga, Philippines</p>
        </div>

        <div className="contact-info-card">
          <span>Availability</span>
          <p>Open for opportunities and freelance work</p>
        </div>
      </motion.div>

      <motion.form
        className="contact-form"
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button className="btn primary-btn" type="submit">
          Send Message
        </button>
      </motion.form>
    </div>
  )
}

export default Contact