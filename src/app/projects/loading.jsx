'use client'
import { Card, Container, Placeholder } from 'react-bootstrap'

export default function Loading () {
  return (
    <Container>
      <div className='d-flex justify-content-around mr-2'>
        <Card style={{ width: '24%' }} className='mr-4'>
          <Placeholder animation='glow' as='p'>
            <Placeholder lg={12} md={12} style={{ height: '180px' }} />
          </Placeholder>
          <div className='p-4'>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant='primary' xs={6} />
          </div>
        </Card>
        <Card style={{ width: '24%' }} className='mr-4'>
          <Placeholder animation='glow' as='p'>
            <Placeholder lg={12} md={12} style={{ height: '180px' }} />
          </Placeholder>
          <div className='p-4'>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant='primary' xs={6} />
          </div>
        </Card>
        <Card style={{ width: '24%' }} className='mr-4'>
          <Placeholder animation='glow' as='p'>
            <Placeholder lg={12} md={12} style={{ height: '180px' }} />
          </Placeholder>
          <div className='p-4'>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant='primary' xs={6} />
          </div>
        </Card>
        <Card style={{ width: '24%' }} className='mr-4'>
          <Placeholder animation='glow' as='p'>
            <Placeholder lg={12} md={12} style={{ height: '180px' }} />
          </Placeholder>
          <div className='p-4'>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant='primary' xs={6} />
          </div>
        </Card>
      </div>
    </Container>
  )
}
