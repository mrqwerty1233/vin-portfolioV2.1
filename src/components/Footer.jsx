function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        <div className="footer-logo">
          VIN
        </div>

        <p>
          © {new Date().getFullYear()} Marl Vincent R. Madronero
        </p>

        <p className="footer-tag">
          Built with React + Framer Motion
        </p>

      </div>

    </footer>
  )
}

export default Footer