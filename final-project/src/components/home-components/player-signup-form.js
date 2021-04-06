import React, { useState } from 'react'; 
import { Form,Button } from 'react-bootstrap';
import './homePage.css'

export const PlayerForm = (props) => {
    const[name, setNAme] = useState(''); 
    const[team, setTeam] = useState(''); 
    const[sport, setSport] = useState(''); 
    const[positon, setPositon] = useState(''); 

    const handleSubmit = (e)=> {
        props.addPlayer({name,team,sport,positon})
        e.preventDefault(); 
    }

    return (
        <form  onSubmit={handleSubmit} id="Newform">
            <h2>Submission form</h2>
             <Form.Group controlId="name">
                <Form.Label>Player Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=> setNAme(e.target.value)} />
                    <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="team">
                <Form.Label>Team Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter team" value={team} onChange={(e)=> setTeam(e.target.value)} />
                    <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="sport">
                <Form.Label>Sport Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter sport" value={sport} onChange={(e)=> setSport(e.target.value)}/>
                    <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="Positon">
                <Form.Label>Positon</Form.Label>
                    <Form.Control type="text" placeholder="Enter Positon" value={positon} onChange={(e)=> setPositon(e.target.value)}/>
                    <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </form>
    )
    
}