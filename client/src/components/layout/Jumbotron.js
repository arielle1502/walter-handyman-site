import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import toolsImage from '../../assets/bwtools.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${toolsImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
    border-bottom-left-radius:20%;
    border-bottom-right-radius:20%;
  }
  .overlay {
    background: linear-gradient(rgba(0,0,0,1),rgba(227,178,60,0.5));
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    border-bottom-left-radius:20%;
    border-bottom-right-radius:20%;
  }

  .jumboText{
    margin:auto;
    text-align:center;
    padding-top: 5rem;
    color: white;
    font-family: 'Varela Round', sans-serif;
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
      <Jumbo fluid className='jumbo'>
        <div className='overlay'></div>
        <Container className="jumboText">
          <h1>Get A Solution <br/>For All Your Home Repair Needs</h1>
          <p> Professionalism and Experience Get the Job Done</p>
          <Button variant="warning">Get In Touch</Button>
        </Container>
      </Jumbo>
    </Styles>
  )
}

export default Jumbotron