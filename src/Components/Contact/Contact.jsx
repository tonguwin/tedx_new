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
import Andy from './Images/andy.jpeg'
import Marshall from './Images/marshall.png'

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
                    <p className="text2">Our organization wouldn't be possible without the support and encouragement of our wonderful sponsors! If your company or department is interested in sponsoring us and learning more information about our Sponsor Membership program, please contact us at <a href="mailto:tedxfinance@gmail.com">tedxfinance@ucsd.edu</a></p>
                </Row>

                

                <Container style={{paddingTop:"6rem"}}>
                    <Row>
                        <Col>
                            <a href="http://www.prospectfund.com/" target="_blank">
                                <img src={Andy} className="image zoom"/>
                                </a>
                        </Col>
                        <Col style={{paddingLeft:"5rem"}}>
                            <p className="meet2">
                                Andy Nahas 
                            </p>
                            <p className="meet3">
                                2021 | Platinum Sponsor
                            </p>
                            <p className="text3">
                            Andy Nahas is a UC San Diego alum who founded <a href="http://www.prospectfund.com/" target="_blank">The Prospect Fund</a>, a socially responsible investment business which makes money in the stock market and uses profits to support social justice causes.  The Prospect Fund is the top performing fund in the BarclayHedge database for the most recent 25 year period.  
                            </p>
                            <p className="text3" style={{paddingTop:"2rem"}}>
                            Andy also founded <a href="https://www.musicpower.org/" target="_blank">MusicPower</a>, a charity which supports exciting initiatives that empower people through music.  He created this organization after witnessing the power of music while performing professional style concerts at nursing homes for over 25 years.  His first audience ever was in a Third College talent show at UCSD. 
                            </p>
                        </Col>
                    </Row>
     
                   
                </Container>

                <Container>
                <Row style={{justifyContent:"center"}}>
                        <p className="meet5">
                            Thurgood Marshall College 
                        </p>
                        <p className="meet4">
                            2021 | Gold Sponsor
                        </p>
                    </Row>
                    <Row style={{paddingTop:"4rem"}}>
                        <img src={Marshall} className="image1 zoom1"/>
                    </Row>
                    
                </Container>
                
                <Row style={{paddingTop:"1rem"}}>
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