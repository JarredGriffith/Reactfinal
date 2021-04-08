import React from 'react';
import './App.css';
import PageNav from './components/nav';
import  PlayerList from './components/playerlist';
import About from './components/about';
import Home from './components/home'
import APIcalls from './services/apiservices'
import {
  //need to get thing from the react router. 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link, 
  useRouteMatch
} from 'react-router-dom'; 
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div>
    <PageNav/>
    <div>
      <br/>
    <Container className="mid-background">
    <Router>
      <Switch>
        <Route path="/players" exact component={PlayerList}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
    </Container>
    </div>
    </div>
  );
}

export default App;
