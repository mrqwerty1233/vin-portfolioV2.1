import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

// ─────────────────────────────────────────────────────────────────────────────
// 📧  EmailJS setup — follow these steps once:
//   1. Sign up free at https://www.emailjs.com
//   2. Add a Gmail (or any) Email Service → copy the Service ID
//   3. Create an Email Template → copy the Template ID
//      Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//   4. Go to Account → API Keys → copy your Public Key
//   5. Paste all three values into the constants below
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID"   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY"   // e.g. "abcDEFghiJKL"

function Contact() {
  const [status, setStatus] = useState("idle") // "idle" | "sending" | "success" | "error"

  const sendEmail = async (event) => {
    event.preventDefault()
    setStatus("sending")

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        event.target,
        EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      event.target.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
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
                disabled={status === "sending" || status === "success"}
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                disabled={status === "sending" || status === "success"}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              disabled={status === "sending" || status === "success"}
            />

            <textarea
              name="message"
              placeholder="Tell me about your project, role, or inquiry"
              required
              disabled={status === "sending" || status === "success"}
            ></textarea>

            {/* Submit button — changes label based on state */}
            <button
              className="btn primary-btn"
              type="submit"
              disabled={status === "sending" || status === "success"}
            >
              {status === "sending" && "Sending…"}
              {status === "success" && "Message Sent ✓"}
              {(status === "idle" || status === "error") && "Send Message"}
            </button>

            {/* Inline feedback — no browser alert() */}
            {status === "success" && (
              <p className="form-feedback form-feedback-success">
                Message sent! I&apos;ll get back to you as soon as possible.
              </p>
            )}
            {status === "error" && (
              <p className="form-feedback form-feedback-error">
                Something went wrong. Please try emailing me directly at{" "}
                <a href="mailto:marlmadronero18@gmail.com">marlmadronero18@gmail.com</a>.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
