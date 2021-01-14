import React from 'react';
import styled from 'styled-components';
import {Row, Col, Image, Button, Container} from 'react-bootstrap';
import toolbox from '../../assets/ToolboxBG.png';



const Styles = styled.div`
  .header{
    font-family: Arial, Helvetica, sans-serif;
    text-align:center;
    color: black;
  };
  .top{
    height:50px;
    width:100%;
    border-radius: 5px;
  };

  .toolboxImg{
    
  }
  
  .toolboxImg img{
    max-width:200px;
    margin:auto;
  }

`;



const Home = () => {
  return (
    <Styles>
      <div className="toolboxImg">
      <Image src={toolbox} alt=""/>
      </div>
    <div className="top">
      <h1 className="header">My Services</h1>
    </div>
    <Container>
    <Row>
    <Col></Col>
    </Row>
    <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
    <Col></Col>
    </Row>
    </Container>
   
    </Styles>

    
  )
}

export default Home;