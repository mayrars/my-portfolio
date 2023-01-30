'use client'
import { Placeholder } from 'react-bootstrap'

export default function Loading () {
  return (
    <>
      <Placeholder xs={6} animation='glow' bg='success' />
      <Placeholder animation='glow' bg='success'/>
      <Placeholder style={{ width: '25%' }} animation='glow' bg='success' />
    </>
  )
}
