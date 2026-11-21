import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClipboardDocument,
  HiOutlineCheck,
  HiArrowUpRight,
  HiArrowDownTray,
} from "react-icons/hi2"

const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY"

function Contact() {
  const [status, setStatus] = useState("idle") // "idle" | "sending" | "success" | "mailto" | "error"
  const [copied, setCopied] = useState(false)
  const directEmail = "marlmadronero18@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(directEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const sendEmail = async (event) => {
    event.preventDefault()
    const form = event.target
    const fromName = form.from_name.value.trim()
    const fromEmail = form.from_email.value.trim()
    const subject = form.subject.value.trim()
    const message = form.message.value.trim()

    const isConfigured =
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY"

    if (!isConfigured) {
      // Fallback gracefully to a pre-filled direct email draft so visitors never hit a broken form
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`)
      const mailtoBody = encodeURIComponent(
        `Hi Vin,\n\n${message}\n\n—\nFrom: ${fromName}\nReply-To: ${fromEmail}`
      )
      window.location.href = `mailto:${directEmail}?subject=${mailtoSubject}&body=${mailtoBody}`
      setStatus("mailto")
      form.reset()
      return
    }

    setStatus("sending")
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      form.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
    }
  }

  return (
    <div className="section-block contact-block">
      <div className="container">
        <motion.div
          className="section-header-grid"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-header-left">
            <span className="section-index">06 // CONTACT</span>
            <h2 className="section-heading">
              Initiate a Project, Role, or Technical Consultation
            </h2>
          </div>

          <p className="section-lead">
            Available for web design and frontend development roles, IT support
            positions, and custom business tool collaborations—remote or
            on-site in Pampanga, Philippines.
          </p>
        </motion.div>

        <div className="contact-studio-grid">
          <motion.div
            className="contact-channels-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="contact-channel-card">
              <div className="channel-card-top">
                <span className="mono-index">DIRECT ELECTRONIC MAIL</span>
                <HiOutlineEnvelope className="channel-icon" />
              </div>
              <a
                href={`mailto:${directEmail}`}
                id="contact-direct-email-link"
                className="channel-primary-value"
              >
                {directEmail}
              </a>
              <p className="channel-note">
                Primary channel for hiring managers, project briefs, and
                technical collaborations.
              </p>
              <div className="channel-actions">
                <button
                  type="button"
                  id="contact-copy-email-btn"
                  className="btn secondary-btn small-btn"
                  onClick={handleCopyEmail}
                >
                  {copied ? (
                    <>
                      <HiOutlineCheck className="icon-accent" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineClipboardDocument />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${directEmail}`}
                  className="btn ghost-btn small-btn"
                >
                  <span>Open Mail App</span>
                  <HiArrowUpRight />
                </a>
              </div>
            </div>

            <div className="contact-sub-channels">
              <div className="contact-mini-card">
                <div className="channel-card-top">
                  <span className="mono-index">PHONE / MOBILE</span>
                  <HiOutlinePhone className="channel-icon" />
                </div>
                <a href="tel:+639369124592" className="channel-sub-value">
                  +63 936 912 4592
                </a>
                <p className="channel-note">Direct calls &amp; SMS inquiries</p>
              </div>

              <div className="contact-mini-card">
                <div className="channel-card-top">
                  <span className="mono-index">BASE LOCATION</span>
                  <HiOutlineMapPin className="channel-icon" />
                </div>
                <p className="channel-sub-value">Candaba, Pampanga</p>
                <p className="channel-note">Philippines • Remote &amp; On-Site</p>
              </div>
            </div>

            <div className="contact-resume-banner">
              <div>
                <span className="mono-index">CURRICULUM VITAE</span>
                <h4>Need a formal copy of my credentials?</h4>
                <p>Download my complete PDF resume with education and career history.</p>
              </div>
              <a
                href="/resume.pdf"
                download
                id="contact-resume-download-btn"
                className="btn secondary-btn small-btn"
              >
                <HiArrowDownTray />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="contact-form-shell">
              <div className="contact-form-header">
                <span className="mono-index">INQUIRY DISPATCH</span>
                <h3>Send a Direct Message</h3>
                <p>
                  Fill out the brief below and I&apos;ll respond promptly to discuss
                  your requirements.
                </p>
              </div>

              <form className="studio-form" onSubmit={sendEmail} id="portfolio-contact-form">
                <div className="form-row-2col">
                  <div className="form-field">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="from_name"
                      placeholder="Juan Dela Cruz"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="from_email"
                      placeholder="name@company.com"
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">Subject / Role / Project Scope</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="e.g., Web Designer Role / Custom Dashboard Project"
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Message Details</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Share a brief overview of your project, timeline, or role opportunity..."
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  className="btn primary-btn form-submit-btn"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" && <span>Dispatching Message…</span>}
                  {status === "success" && <span>Message Sent ✓</span>}
                  {status === "mailto" && <span>Email Draft Prepared ✓</span>}
                  {(status === "idle" || status === "error") && (
                    <>
                      <span>Send Message</span>
                      <HiArrowUpRight />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="form-feedback form-feedback-success">
                    Thank you! Your message has been sent. I&apos;ll get back to you
                    shortly.
                  </p>
                )}

                {status === "mailto" && (
                  <p className="form-feedback form-feedback-success">
                    Your inquiry has been formatted for your mail client. You
                    can also email me directly at{" "}
                    <a href={`mailto:${directEmail}`}>{directEmail}</a>.
                  </p>
                )}

                {status === "error" && (
                  <p className="form-feedback form-feedback-error">
                    Could not reach the mail service. Please email me directly
                    at <a href={`mailto:${directEmail}`}>{directEmail}</a>.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
