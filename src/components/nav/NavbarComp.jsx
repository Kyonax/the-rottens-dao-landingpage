import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Logo from '../../assets/TheRottensDAO.svg'
//Css
import './navbarcomp.css'

function NavbarComp() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} style={{ width: 120, marginTop: -7 }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Whitepaper</Nav.Link>
                <Button className='social-button' variant="primary">Discord</Button>{' '}
                <Button className='social-button' variant="primary">Twitter</Button>{' '}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Router>
  )
}

export default NavbarComp



