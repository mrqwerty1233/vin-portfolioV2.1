import { useEffect, useState } from "react"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2"

function useTheme() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === "undefined") return false
    return localStorage.getItem("vin-theme") === "light"
  })

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light-theme")
      localStorage.setItem("vin-theme", "light")
    } else {
      document.body.classList.remove("light-theme")
      localStorage.setItem("vin-theme", "dark")
    }
  }, [isLight])

  // Sync across tabs or multiple toggle instances
  useEffect(() => {
    const syncTheme = (e) => {
      if (e.detail !== undefined) {
        setIsLight(e.detail)
      }
    }
    window.addEventListener("vin-theme-change", syncTheme)
    return () => window.removeEventListener("vin-theme-change", syncTheme)
  }, [])

  const toggleTheme = () => {
    const next = !isLight
    setIsLight(next)
    window.dispatchEvent(new CustomEvent("vin-theme-change", { detail: next }))
  }

  return { isLight, toggleTheme }
}

function ThemeToggle({ className = "" }) {
  const { isLight, toggleTheme } = useTheme()

  return (
    <button
      id="theme-toggle-btn"
      className={`theme-switch-btn ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark studio theme" : "Switch to editorial light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
      type="button"
    >
      {isLight ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  )
}

export default ThemeToggle