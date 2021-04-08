import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import {UpdateCard} from './update-player'
import './player.css'

export default class PlayerCard extends React.Component {
    constructor(props) {
        super(props)
        this.handledelete = this.handledelete.bind(this)
    }

    handledelete(){
        this.props.deleteplayer(this.props._id)
    }

    render() {
        return(
            <Card className="player-card">
            <Card.Body >
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>
                player Sport: {this.props.sport} <br/>
                player Team: {this.props.team} <br/>
                Player Positon: {this.props.positon}
              </Card.Text>
              <Button variant="danger" onClick={this.handledelete}>Delete</Button> {" "}
              <UpdateCard {...this.props}/>
            </Card.Body>
          </Card>
        )
    }
}