import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Event.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';


import Constellate1 from '../images/constellate_title.png'

// ALTHOUGH THIS PAGE IS CALLED CONTACT -- It's Sponsors


class Constellate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                      
            <Container>
                <Row>
                    <p className="events">
                        Constellate
                    </p>
                </Row>
                <Row>
                    <p className="date">
                        May 15-16th, 2021 | Zoom
                    </p>
                </Row>
                <Row>
                    <img src={Constellate1} className="image"/>
                </Row>
                <Row className="center1" style={{paddingTop:"2rem"}}>
                    <a className="btn btn-5">Pre-Register</a>
                </Row>
                <Row style={{paddingTop:"4rem"}}>
                    <Col>
                        <p className="date">
                            Event Description:
                        </p>
                    </Col>
                    <Col style={{paddingTop:"1rem"}}>
                        <p className="des">"Constellate" returns us to a world of child-like wonder, a time when the questions we asked were beyond ourselves - a time when we were so furiously curious of the immense space called the Unknown.</p>

                        <p className="des" style={{paddingTop:"1rem"}}>We are reminded that we can only connect the dots as we go. When we embrace the fact that we each play a unique part in a bigger story, then one day, we will together be in awe and peace when we step back and see how our paths have gathered us together and intertwined to form an intricate constellation far more beautiful and magnificent than we could have ever imagined.</p>
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
export default connect()(Constellate);