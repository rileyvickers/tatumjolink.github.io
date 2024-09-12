import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export class Navigation extends React.Component {
  render() {
    return(
      <Container style={{position:'sticky', top: 15, margin: 15, zIndex:3}}>
        <Navbar className='box'>
            <Navbar.Brand href="#about" className='navbarheadertext'>Tatum A. Jolink, Ph.D.</Navbar.Brand>
            <Nav className='internalbox'>
              <Nav.Link href="#research" className='navbartext'>Research</Nav.Link>
              <Nav.Link href="./cv.pdf" className='navbarlink'>CV</Nav.Link>
              <Nav.Link href="https://scholar.google.com/citations?hl=en&user=c9KVW9gAAAAJ" className='navbarlink'>
                <FontAwesomeIcon icon={fab["faGoogle"]}/>
              </Nav.Link>
              <Nav.Link href="mailto:tjolink@umich.edu" className='navbarlink'>
                <FontAwesomeIcon icon={faEnvelope} />
              </Nav.Link>
            </Nav>
        </Navbar>
      </Container>
    )
  }
}