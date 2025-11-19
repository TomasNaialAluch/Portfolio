import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">TA</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => scrollToSection('about')}>
              Sobre mí
            </a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>
              Proyectos
            </a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>
              Habilidades
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              Contacto
            </a>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

