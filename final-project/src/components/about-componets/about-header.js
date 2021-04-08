import Jumbotron from 'react-bootstrap/Jumbotron'
import TextLoop from "react-text-loop";
import './about.css'

function AboutCoverPhoto() {
    return(
        <Jumbotron className="about-cover-photo">
            <h1 className="text"> We are about {' '}  
            <TextLoop springConfig={{ stiffness: 180, damping: 8 }} interval={7000}>
                <p> Our Team</p>
                <p> Our City</p>
                <p> Our Players</p>
                <p> Our Community</p>
            </TextLoop>
            </h1>
        </Jumbotron>
    )
}
 
export default AboutCoverPhoto; 