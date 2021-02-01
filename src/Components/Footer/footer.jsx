import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Footer/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import Facebook from './images/facebook.png';
import Instagram from './images/ig.png';
import Linkedin from './images/link.png';
import Email from './images/mail.png';



// Ayo, if it doesn't start up -- just make sure this file's name starts w a capital F 


class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className="footer">
                <Row className="center">
                    <Col xs={2}>
                        <a class="fb" href="https://www.facebook.com/TEDxUCSD" target="_blank">
                            <img src={Facebook} className="zoom"></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="ig" href="https://www.instagram.com/tedxucsd/" target="_blank">
                            <img src={Instagram} className="zoom"></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="linkedin" href="https://www.linkedin.com/company/tedxucsd/" target="_blank">
                            <img src={Linkedin} className="zoom"></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="linkedin" href="mailto:tedxucsd@gmail.com" target="_blank">
                            <img src={Email} className="zoom"></img>
                        </a>
                    </Col>
                </Row>
                <Row style={{paddingTop:"2rem"}}>
                    <p className="text1">This independent TEDx event is operated under license from TED</p>
                </Row>
            </Container>
        )
    }
}
export default connect()(Footer);