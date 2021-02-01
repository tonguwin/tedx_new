import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Contact/Contact.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';
import contact from '../../img/SP20/contact.jpg';
import pageBreak from '../../img/pagebreak.png';
import NavBar from 'react-bootstrap/Navbar';
import Recruit from '../../img/Issue2/JOIN.gif';

// logos
import Grad from './Images/grad1.png'
import Lib from './Images/library.png'
import Rady from './Images/rady1.png'
import Research from './Images/research1.png'

// ALTHOUGH THIS PAGE IS CALLED CONTACT -- It's Sponsors


class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                            <a href="https://docs.google.com/document/d/119WbGNpObYxrE8r0RxY6_ZAQRS1KrxjTXHA3HRX4QSA/edit" target="_blank">
                    <img src={Recruit} className="Recruitment" />
                </a>
            <Container>
                <Row>
                    <p className="contact">
                        Sponsors
                    </p>
                </Row>
                <Row>
                    <p className="text">Our organization wouldn't be possible without the support and encouragement of our wonderful sponsors! If your company or department is interested in sponsoring us and learning more information about our Sponsor Membership program, please contact us at <a href="mailto:tedxfinance@gmail.com">tedxfinance@gmail.com</a></p>
                </Row>
                <Row style={{paddingTop:"2rem"}}>
                    <p className="meet">
                        Past Sponsors
                    </p>
                </Row>

                <Container>
                    <Row>
                        <Col>
                            <a href="https://library.ucsd.edu/" target="_blank">
                                <img src={Lib} className="image zoom"/>
                                </a>
                        </Col>
                        <Col style={{paddingLeft:"5rem"}}>
                            <a href="https://rady.ucsd.edu/" target="_blank">
                                <img src={Rady} className="image zoom" />
                                </a>
                        </Col>
                    </Row>

                    <Row style={{paddingTop:"6rem", paddingBottom:"2rem"}}>
                        <Col>
                            <a href="https://grad.ucsd.edu/" target="_blank">
                                <img src={Grad} className="image zoom" />
                                </a>
                        </Col>
                        <Col style={{paddingLeft:"5rem"}}>
                            <a href="https://research.ucsd.edu/" target="_blank">
                                <img src={Research} className="image zoom" />
                                </a>
                        </Col>
                    </Row>
                </Container>

               
               
              
            </Container>
            
            </>
        )
    }
}
export default connect()(Contact);