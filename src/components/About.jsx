import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">
          Desarrollador Front End con pasión por crear experiencias digitales excepcionales
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy Tomás Aluch, un desarrollador Front End y diseñador UX/UI de Argentina. 
              Mi pasión es combinar diseño y código para crear interfaces que no solo se vean 
              bien, sino que también funcionen de manera intuitiva y eficiente.
            </p>
            <p>
              Mi formación incluye cursos especializados en UX/UI, UI/UX Avanzado, Desarrollo Web 
              y React JS en Coderhouse. Actualmente estoy expandiendo mis conocimientos en 
              automatizaciones con n8n y Make.
            </p>
            <p>
              Trabajo con tecnologías modernas como React, Next.js, HTML/CSS y herramientas de 
              diseño como Figma, Photoshop e Illustrator. Me enfoco en crear soluciones que 
              mejoren la experiencia del usuario y generen valor real.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedicación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

