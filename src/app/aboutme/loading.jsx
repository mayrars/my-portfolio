import { Placeholder } from 'react-bootstrap'

export default function Loading () {
  return (
    <>
      <Placeholder xs={6} animation='glow' />
      <Placeholder animation='glow' />
      <Placeholder style={{ width: '25%' }} animation='glow' />
    </>
  )
}
