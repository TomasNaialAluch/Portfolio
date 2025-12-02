import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import fiestukiImg from '../assets/images/Fiestuki.png'
import rositaNextImg from '../assets/images/RositaNext.png'
import pastaVicenzoImg from '../assets/images/Pastavicenzo.jpg'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fiestuki',
      description: 'E-commerce desarrollado con React JS y Firebase. Incluye sistema de carrito, autenticación y gestión de órdenes.',
      technologies: ['React', 'Firebase', 'CSS'],
      github: 'https://github.com/TomasNaialAluch/Fiestuki',
      live: 'https://fiestuki-db.web.app/',
      image: fiestukiImg
    },
    {
      id: 2,
      title: 'Pasta Vicenzo',
      description: 'Aplicación web desarrollada con React. Proyecto de e-commerce con funcionalidades avanzadas.',
      technologies: ['React', 'CSS', 'Firebase'],
      github: 'https://github.com/TomasNaialAluch/PastaVicenzo',
      live: 'https://pastavicenzo.web.app/tienda',
      image: pastaVicenzoImg
    },
    {
      id: 3,
      title: 'Rosita',
      description: 'Aplicación web desarrollada con Next.js. Proyecto moderno con SSR y optimizaciones de rendimiento.',
      technologies: ['Next.js', 'React', 'CSS'],
      github: 'https://github.com/TomasNaialAluch/RositaNext',
      live: 'https://rosita-b76eb.web.app/tienda/',
      image: rositaNextImg
    },
    {
      id: 4,
      title: 'Paz Mental',
      description: 'Sitio web estático desarrollado con HTML, CSS y JavaScript. Desplegado en GitHub Pages.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/TomasNaialAluch/pazmental',
      live: 'https://tomasnaialaluch.github.io/pazmental/',
      image: null
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Algunos de mis proyectos recientes. Cada uno representa un desafío único y una oportunidad de aprendizaje.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className={`project-image ${project.image ? 'has-image' : ''}`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                )}
                <div className="project-overlay">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Ver código en GitHub"
                  >
                    <FaGithub />
                  </a>
                  {project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Ver proyecto en vivo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

