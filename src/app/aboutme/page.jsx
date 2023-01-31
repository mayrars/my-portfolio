'use client'
import { Col, Container, Row } from 'react-bootstrap'

export default function AboutPage () {
  return (
    <Container>
      <h1>About me</h1>
      <p>Desarrolladora web con más de 5 años de experiencia. Deseosa de crecer en el campo del desarrollo; aprender nuevas tecnologías y buenas practicas.</p>
      <section>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h2>Technical skills</h2>
              <ul>
                <li>Joomla | Wordpress | Moodle</li>
                <li>React</li>
                <li>PHP</li>
                <li>Javascript | JQuery</li>
                <li>HTML | HTML5 | CSS | SASS</li>
                <li>MYSQL</li>
                <li>Bootstrap | UIKIT | Material UI</li>
                <li>Administración, diseño, modelado y soporte de bases de datos</li>
                <li>Google Analytics</li>
                <li>Gestión de versionamiento con GIT</li>
                <li>S.O. Linux | Windows</li>
              </ul>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h2>Aptitudes</h2>
              <ul>
                <li>Responsable</li>
                <li>Organizada</li>
                <li>Capacidad de trabajar tanto individualmente como en equipo</li>
                <li>Comprometida</li>
                <li>Analítica</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <h2>Education</h2>
        <h3>BUAP, Puebla</h3>
        <p className='cursive'>2010-2011</p>
        <p>Diplomado en Tecnologías de la Información</p>
        <h3>BUAP, Puebla</h3>
        <p className='cursive'>2005-2010</p>
        <p>Ingeniería en Ciencias de la Computación</p>
        <h3>Centro de Sistemas Computacionales, Puebla</h3>
        <p className='cursive'>2001-2003</p>
        <p>Carrera Técnica Sistemas Computacionales</p>
      </section>
    </Container>
  )
}
