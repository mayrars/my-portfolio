'use client'
import { Placeholder, Container } from 'react-bootstrap'

export default function Loading () {
  return (
    <Container>
      <Placeholder as='p' animation='glow'>
        <Placeholder lg={6} />
      </Placeholder>
      <Placeholder as='p' animation='glow'>
        <Placeholder xs={8} />
      </Placeholder>
      <Placeholder as='p' animation='glow'>
        <Placeholder style={{ width: '25%' }} />
      </Placeholder>
    </Container>
  )
}
