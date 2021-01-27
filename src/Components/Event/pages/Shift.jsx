import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Event.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';


import Shift1 from '../images/shift_enter_title.png'

// ALTHOUGH THIS PAGE IS CALLED CONTACT -- It's Sponsors


class Shift extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                      
            <Container>
                <Row>
                    <p className="events">
                        Shift + Enter
                    </p>
                </Row>
                <Row>
                    <p className="date">
                        October 13th, 2020 | Zoom
                    </p>
                </Row>
                <Row className="center">
                    <img src={Shift1} className="image-full"/>
                </Row>
                <Row className="center1" style={{paddingTop:"2rem"}}>
                    <a className="btn btn-5">Check Out the FB Event</a>
                </Row>
                <Row style={{paddingTop:"4rem"}}>
                    <Col>
                        <p className="date">
                            Event Description:
                        </p>
                    </Col>
                    <Col style={{paddingTop:"1rem"}}>
                        <p className="des">We all have experiences where we are moved off our paths, whether it be by curious choice or retrospective serendipity, and we are presented the opportunity to emerge into new terrain. Sometimes a paradigm shift is required before you make the next step into your lives. We invite you to shift alongside us, and enter TEDXUCSD 2020-2021.</p>

                        <p className="des" style={{paddingTop:"1rem"}}>This was TEDxUCSD's first online student recruitment event!</p>
                    </Col>
                </Row>
                
            

              
            </Container>
            
            </>
        )
    }
}
export default connect()(Shift);