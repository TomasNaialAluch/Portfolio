import { FaGithub, FaBehance, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Tomás Aluch. Todos los derechos reservados.</p>
          </div>
          
          <div className="footer-social">
            <a 
              href="https://github.com/TomasNaialAluch" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.behance.net/tomasaluch" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Behance"
            >
              <FaBehance />
            </a>
            <a 
              href="https://www.linkedin.com/in/tomas-aluch" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

