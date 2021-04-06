import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import {Row,Col } from 'react-bootstrap'
import {Apicalls} from '../services/apiservices'
import {PlayerForm} from './home-components/player-signup-form'
import './home-components/homePage.css'

function Home() {

  const addPlayer = async(car)=>{
    await Apicalls.create(car); 
    //this.getdata(); 
  }
    return (
        <>
<Jumbotron fluid className="Home-page-cover" >
  <Container>
      <div className="home-page-text">
    <h1>Las Vegas Sports</h1>
    <p>
      This city of sin just got better! <br/>
      Click me to find out more informaiton on the teams!
    </p>
    </div>
  </Container>
</Jumbotron>
<Container>
<div>
    <Row>
        <Col xs={12}>
        <div className="form-texts">
            <h2>There is a lot happing in Vegas</h2>
            <p>This is only the the begginning to a great future</p>
            <p>join the Vegas Sports by filling the form below.</p>
        {/* form would fo here */}
        </div>
        <div>
          <PlayerForm addPlayer={addPlayer}/>
          </div>
        </Col>
    </Row>
</div>
</Container>
</>
    )

}

export default Home 