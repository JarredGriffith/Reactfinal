import React from 'react';
import './App.css';
import PageNav from './components/nav';
import  PlayerList from './components/playerlist';
import About from './components/about';
import {
  //need to get thing from the react router. 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link, 
  useRouteMatch
} from 'react-router-dom'; 


function App() {
  return (
    <div>
    <PageNav/>
    <div>
    <Router>
     <Route path="/players" exact component={PlayerList}/>
     <Route path="/about" component={About}/>
    </Router>
    </div>
    </div>
  );
}

export default App;
