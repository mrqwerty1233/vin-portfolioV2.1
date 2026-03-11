import { useEffect, useState } from "react"

function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light-theme")
    } else {
      document.body.classList.remove("light-theme")
    }
  }, [isLight])

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsLight(!isLight)}
      aria-label="Toggle theme"
      type="button"
    >
      {isLight ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeToggle