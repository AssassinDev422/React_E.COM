import React, { Component } from 'react';
import styles from '../styles/styles.css';
import header from '../styles/header.css';
import {  ListGroup, ListGroupItem, Col  } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

class App extends Component {
  render() {
      return (
<div>
  <div>
    <Header content="list"/>
  </div>

          <Col sm={6} smOffset={3} className="indent">

          <ListGroup className="list-block">
            <ListGroupItem >
              <Link to="/list" className=""> 1. List of Items</Link>
            </ListGroupItem>
            <ListGroupItem href="#link2">2. Link </ListGroupItem>
            <ListGroupItem href="#link3">3. Link </ListGroupItem>
            <ListGroupItem href="#link4">4. Link </ListGroupItem>
            <ListGroupItem href="#link5">5. Link </ListGroupItem>
            <ListGroupItem href="#link6">6. Link </ListGroupItem>
            <ListGroupItem href="#link7">7. Link </ListGroupItem>
            <ListGroupItem href="#link8">8. Link </ListGroupItem>
            <ListGroupItem href="#link9">9. Link </ListGroupItem>
            <ListGroupItem href="#link10">10. Link </ListGroupItem>
            <ListGroupItem href="#link11">11. Link </ListGroupItem>
            <ListGroupItem href="#link12">12. Link </ListGroupItem>
            <ListGroupItem href="#link13">13. Link </ListGroupItem>
            <ListGroupItem href="#link14">14. Link </ListGroupItem>
            <ListGroupItem href="#link15">15. Link </ListGroupItem>
            <ListGroupItem href="#link16">16. Link </ListGroupItem>
          </ListGroup>
          </Col>
</div>
      );
  }
}

export default App;
