import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })

      const target = event.target
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea")

      setIsPointer(Boolean(isClickable))
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <>
      <motion.div
        className={`custom-cursor ${isPointer ? "active" : ""}`}
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.2,
        }}
      />

      <motion.div
        className={`custom-cursor-ring ${isPointer ? "active" : ""}`}
        animate={{
          x: position.x - 22,
          y: position.y - 22,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 22,
          mass: 0.5,
        }}
      />
    </>
  )
}

export default CustomCursor