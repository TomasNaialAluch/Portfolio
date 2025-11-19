import { useState } from 'react'
import { FaEnvelope, FaGithub, FaBehance, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te responderé pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Conectemos</h3>
            <p>
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
              Si tienes alguna pregunta o quieres colaborar, no dudes en contactarme.
            </p>
            
            <div className="contact-links">
              <a 
                href="mailto:contacto@tomasaluch.com" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
              <a 
                href="https://github.com/TomasNaialAluch" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.behance.net/tomasaluch" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance />
                <span>Behance</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/tomas-aluch" 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

