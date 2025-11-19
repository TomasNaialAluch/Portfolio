import { FaReact, FaHtml5, FaCss3Alt, FaFigma, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiFirebase, SiN8N, SiMake } from 'react-icons/si'
import { DiPhotoshop, DiIllustrator } from 'react-icons/di'
import './Skills.css'

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
        { name: 'n8n', icon: <SiN8N />, level: 60 },
        { name: 'Make', icon: <SiMake />, level: 60 },
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

