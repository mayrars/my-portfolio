'use client'

import Link from 'next/link'
import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

import styles from './header.module.css'

export default function Headerbar () {
  return (
    <Navbar className={styles.header} expand='lg' sticky='top'>
      <Container>
        <NavbarBrand>Portfolio</NavbarBrand>
        <NavbarToggle aria-controls='basic-navbar-nav' />
        <NavbarCollapse id='navigate'>
          <Nav className='me-auto'>
            <Link className='nav-link' href='/'>Home</Link>
            <Link className='nav-link' href='/aboutme'>About me</Link>
            <Link className='nav-link' href='/projects'>Projects</Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}
