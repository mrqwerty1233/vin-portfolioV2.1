import { motion } from "framer-motion"

function LoadingScreen() {
  const letters = "VIN PORTFOLIO".split("")

  return (
    <div className="loading-screen">
      <motion.div
        className="loading-inner"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="loading-text">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.06,
                duration: 0.45,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="loading-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}

export default LoadingScreen