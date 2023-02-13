'use client'
import { Container } from 'react-bootstrap'

export default async function Projectslist (projects) {
  const req = await fetch('api/projects')
  const res = req.json()
  return (
    <>
      <Container className='pt-4'>
        <h1>Projects</h1>
      </Container>
    </>
  )
}
