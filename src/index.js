import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-input-range/lib/css/index.css';

import InputRange from "react-input-range";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class NavBar extends React.Component {
    render() {
        return (
            <Container>
              <Navbar bg="dark" variant="dark" expand="xl">
                <Navbar.Brand href="#home">Sorting Visualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Restart</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                <Navbar.Brand> Array Size </Navbar.Brand>
                <InputRange
                  maxValue={20}
                  minValue={0}
                  value={10}/>
              </Navbar>

            </Container> 
        );
    }
}

// ========================================

ReactDOM.render(
  <NavBar />,
  document.getElementById('root')
);
