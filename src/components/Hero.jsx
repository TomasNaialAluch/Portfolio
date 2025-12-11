import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaBehance, FaArrowDown } from 'react-icons/fa'
import fotoCV from '../assets/images/Foto CV.png'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hola, soy <span className="highlight">Tomás Naial Aluch</span>
            </h1>
            <h2 className="hero-subtitle">
              Desarrollador Front End & Diseñador UX/UI
            </h2>
            <p className="hero-description">
              Creo experiencias digitales atractivas combinando diseño y código.
              Especializado en React, Next.js y diseño de interfaces centradas en el usuario.
            </p>
            
            <div className="hero-buttons">
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Ver Proyectos
              </a>
              <a 
                href="#contact" 
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contactar
              </a>
            </div>

            <div className="hero-social">
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
          
          <div className="hero-image">
            <div className="hero-avatar">
              <img 
                src={fotoCV}
                alt="Tomás Naial Aluch"
                className="avatar-image"
              />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <FaArrowDown />
        </div>
      </div>
    </section>
  )
}

export default Hero

