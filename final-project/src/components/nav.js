import React from 'react'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar'


function PageNav() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Sports LV!</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/players">Players</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    ); 
}

export default PageNav; 