import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Event.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';


import Grav1 from '../images/your_gravity_title.jpg'

// ALTHOUGH THIS PAGE IS CALLED CONTACT -- It's Sponsors


class Gravity extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                      
            <Container>
                <Row>
                    <p className="events">
                        Your Gravity
                    </p>
                </Row>
                <Row>
                    <p className="date">
                        February 12th, 2021 | Zoom
                    </p>
                </Row>
                <Row>
                    <img src={Grav1} className="image"/>
                </Row>
                <Row className="center1" style={{paddingTop:"2rem"}}>
                    <a className="btn btn-5">Register</a>
                </Row>
                <Row style={{paddingTop:"4rem"}}>
                    <Col>
                        <p className="date">
                            Event Description:
                        </p>
                    </Col>
                    <Col style={{paddingTop:"1rem"}}>
                        <p className="des">"Your Gravity" encourages you to give weight to the things you fall back on, the things that ground and center you, the things around which you revolve and from which you evolve. Gravity that we share is also omnipresent, connects us all, and pulls us together. What, then, lies at the center of this core of yours?</p>

                        <p className="des" style={{paddingTop:"1rem"}}>This is TEDxUCSD's first student speaker event and we're so excited for it!</p>
                    </Col>
                </Row>
                <Row>
                    <p className="date" style={{paddingTop:"5rem"}}>
                        Speaker list coming soon... 
                    </p>
                </Row>
            

              
            </Container>
            
            </>
        )
    }
}
export default connect()(Gravity);