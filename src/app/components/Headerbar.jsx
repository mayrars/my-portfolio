'use client'

import { Navbar, Container, NavbarBrand, Nav, NavLink } from 'react-bootstrap'
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
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/aboutme'>About me</NavLink>
            <NavLink href='/projects'>Projects</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}
