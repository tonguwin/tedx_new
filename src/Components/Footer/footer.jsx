import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Footer/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import Facebook from '../../img/facebookwhite.png';
import Instagram from '../../img/instagramwhite.png';
import Linkedin from '../../img/linkedINwhite.png';
import Email from '../../img/email.png';


// Ayo, if it doesn't start up -- just make sure this file's name starts w a capital F 


class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className="footer">
                <Row>
                    <Col xs={2}>
                        <a class="fb" href="https://www.instagram.com/hue.collective/" target="_blank">
                            <img src={Facebook}></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="ig" href="https://www.instagram.com/hue.collective/" target="_blank">
                            <img src={Instagram}></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="linkedin" href="https://www.instagram.com/hue.collective/" target="_blank">
                            <img src={Linkedin}></img>
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="email" href="https://www.instagram.com/hue.collective/" target="_blank">
                            <img src={Instagram}></img>
                        </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default connect()(Footer);