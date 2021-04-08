import React from 'react';
import AboutCoverPhoto from './about-componets/about-header'
import Aboutbody from './about-componets/body'
import Container from 'react-bootstrap/Container'

function About() {
    return (
        <>
          <Container>
        <br/>
        <AboutCoverPhoto/>
        <Aboutbody/>
        </Container>
        </>
    )
    
}

export default About;  