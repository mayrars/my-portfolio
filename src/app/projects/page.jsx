'use client'
import { Container } from 'react-bootstrap'
async function getProjects () {
  const res = await fetch('api/projects')
  return res.json()
}
export default function Projectslist () {
  const projects = getProjects()
  return (
    <>
      <Container className='pt-4'>
        <h1>Projects</h1>
        {
          projects.map(project => {
            return (
              <div key={project.id}>{project.title}</div>
            )
          })
        }
      </Container>
    </>
  )
}
