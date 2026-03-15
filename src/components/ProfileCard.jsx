import { motion } from "framer-motion"

function ProfileCard() {
  return (
    <motion.div
      className="profile-card-shell"
      initial={{ opacity: 0, x: 30, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="profile-availability-badge">
        Open to opportunities
      </div>

      <div className="profile-card">
        <div className="profile-window">
          <span className="dot blue"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="profile-inner">
          <div className="profile-avatar">
            <img src="/images/profile.jpg" alt="Marl Vincent" />
          </div>

          <p className="profile-label">FEATURED PROFILE</p>

          <h3 className="profile-name">Marl Vincent</h3>

          <p className="profile-description">
            IT graduate with a strong interest in web development, technical
            support, and practical digital solutions for real operational needs.
          </p>

          <div className="profile-skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Networking</span>
          </div>
        </div>
      </div>

      <div className="profile-bottom-badge">
        Web • Support • Systems
      </div>
    </motion.div>
  )
}

export default ProfileCard