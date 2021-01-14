import React, {useEffect, useState, useRef} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTools  } from '@fortawesome/free-solid-svg-icons';

library.add(faTools)

const Styles = styled.div`
  
  .navbar-brand, .navbar-nav .nav-link {
    color: #E3B23C;
    font-family: 'Varela Round', sans-serif;
    font-size: 4vh;
    
    &:hover {
      color: white;
      
    }
  }
  .ml-auto{
    font-size: 3vh;
  }
`;


function NavigationBar() {
  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
  return (
    <Styles>
      
      <Navbar expand="lg" fixed="top" style={{ transition: '1s ease',backgroundColor: navBackground ? '#3D3D3D' : 'transparent'}}>
        <Navbar.Brand href="/"><FontAwesomeIcon icon="tools"></FontAwesomeIcon>{' '}<b>Walter's Handyman Services</b></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Nav.Link href='/services'>Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/projects'>Past Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </Styles>
  )
}

export default NavigationBar;