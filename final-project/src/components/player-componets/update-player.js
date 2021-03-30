import React, { useState } from 'react'; 
import { Button,Modal  } from 'react-bootstrap';

export const UpdateCard = (props) => {
    const[name, setName] = useState(props.name); 
    const[team, setTeam] = useState(props.team); 
    const[sport, setSport] = useState(props.sport); 
    const[positon, setPositon] = useState(props.positon); 
    const[id, setId] = useState(props._id); 
    const [show, setShow] = useState(false);

    //need to change to update API call. also its not being passed though.
    const handleSubmit = (e)=> {
        console.log(e); 
        props.updateplayer({name,team,sport,positon,id})
        e.preventDefault(); 
    }
    //this submits the updated data and closes the modal
    const onSubClick = (e)=> {
        handleSubmit(e); 
        handleClose(); 
    }
    //closes and opens the modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Update Player
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Player Name : {name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Name</p> 
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                <p>Sport</p>
                <input type="text" value={sport} onChange={(e)=> setSport(e.target.value)}/>
                <p>Team</p>
                <input type="text" value={team} onChange={(e)=> setTeam(e.target.value)}/>
                <p>Positon</p>
                <input type="text" value={positon} onChange={(e)=> setPositon(e.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={onSubClick}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );


} 