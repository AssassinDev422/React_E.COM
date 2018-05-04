import React, { Component } from 'react';
import styles from '../styles/styles.css';
import {  ListGroup, ListGroupItem, Col, Row, Grid  } from "react-bootstrap";
import images from '../images/ecom_logo_1c-white.png'
import Navigator from './Navigator';

export default class Header extends Component {
        state = {toggleBurger:false};
        burgerToggler = () => {
            this.setState({toggleBurger: !this.state.toggleBurger});
            let linksEl = document.querySelector(".burger");
            console.log(linksEl)
            if (linksEl.style.display === "block") {
                linksEl.style.display = "none";
            } else {
                linksEl.style.display = "block";
            }
        }
        render() {
            const {content} = this.props;
            return <header>
                <Grid>
                    <Row>
                        <Col md={12} sm={12}>
                            <button className="menu-btn" onClick={this.burgerToggler}>
                                <span>toggle menu</span>
                            </button>
                            <Col sm={12} className="wrapper">
                                <Col md={1} sm={1} xs={1}>
                                    <img src={images} width="85" height="75" />
                                </Col>
                                <Navigator id={'nav-list'} content={content} />
                                <div className={'nav-burger'}>
                                    <Navigator id={'burger'} content={content} />
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
              </header>;
        }
}