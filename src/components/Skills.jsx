import { FaReact, FaHtml5, FaCss3Alt, FaFigma, FaGithub, FaCode } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiFirebase } from 'react-icons/si'
import { DiPhotoshop, DiIllustrator } from 'react-icons/di'
import './Skills.css'

// Iconos personalizados para n8n y Make
const N8NIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
  </svg>
)

const MakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

const Skills = () => {
  const skillCategories = [
    {
      title: 'Desarrollo Front End',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      ]
    },
      {
      title: 'Backend & Servicios',
      skills: [
        { name: 'Firebase', icon: <SiFirebase />, level: 75 },
        { name: 'n8n', icon: <N8NIcon />, level: 60 },
        { name: 'Make', icon: <MakeIcon />, level: 60 },
      ]
    },
    {
      title: 'Diseño',
      skills: [
        { name: 'Figma', icon: <FaFigma />, level: 85 },
        { name: 'Photoshop', icon: <DiPhotoshop />, level: 80 },
        { name: 'Illustrator', icon: <DiIllustrator />, level: 75 },
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'GitHub', icon: <FaGithub />, level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">
          Tecnologías y herramientas que uso para crear soluciones digitales
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

