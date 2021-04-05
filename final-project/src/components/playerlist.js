import React from 'react';
import {Apicalls} from '../services/apiservices'
import PlayerCard from './player-componets/player-card'
import CardColumns from 'react-bootstrap/CardColumns'; 
import Container from 'react-bootstrap/Container'
import PlayerCoverPhoto from './player-componets/player-header'

export default class PlayerList extends React.Component {
constructor(props){
    super(props); 
    this.state = {
        players: []
    }
    this.getdata = this.getdata.bind(this);
    this.deleteplayer = this.deleteplayer.bind(this);
    this.updateplayer = this.updateplayer.bind(this); 
}
        componentDidMount() {
            this.getdata();
        }
        getdata = async()=>{
            const d = await Apicalls.get(); 
            this.setState({players: d})
            console.log(this.state)
          }; 
        deleteplayer = async(id)=>{
            console.log(id)
            await Apicalls.delete(id); 
            this.getdata(); };  

        updateplayer = async(id)=>{
            console.log(id)
            await Apicalls.put(id); 
            this.getdata(); };  
 

    render() {
        let playerList = this.state.players.map(player=>{
            return <PlayerCard {...player} key={player._id}
            deleteplayer={this.deleteplayer}
            updateplayer={this.updateplayer}
            />
        })
        return(
      
                <Container> 
                    <br/>
                    <PlayerCoverPhoto/>
                    <CardColumns>
                         {playerList}
                    </CardColumns>
                </Container>
     
        )
    }



}

