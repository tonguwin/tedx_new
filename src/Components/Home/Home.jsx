import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { setTheme } from '../../redux/actions';
import './Home.css';
import { connect } from 'react-redux';
import Issue1 from '../Issues/Issues';
import Issue2 from '../Issues/Issue2';
import Marquee from 'react-double-marquee';
import NavBar from 'react-bootstrap/Navbar';
import Landing from '../Landing/Landing';
import Recruit from '../../img/Issue2/JOIN.gif';
import { Redirect, Link } from 'react-router-dom';

import podcast from './images/podcast1.png';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            progress: 0,
            currentTime: 0,
            duration: 0,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    }

    
    
    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        })
    };



    handleTimeUpdate = (currentTime, progress, duration) => {
        this.setState({
            progress,
            currentTime,
            duration,
        });
    };

    handleOnMute = () => {
        this.setState({ isMuted: true });
    };

    handleOnUnmute = () => {
        this.setState({ isMuted: false });
    };

    togglePlay = () => {
        this.player.togglePlay();
    };

    toggleMute = () => {
        this.player.toggleMute();
    };
    toggleTest = () => {
        this.player.togglePlay();
        this.player.toggleMute();
        console.log("test");

        console.log(this.state.isPlaying);
    }
    handleOnPlay = () => {
        this.setState({ isPlaying: true });
    };

    handleOnPause = () => {
        this.setState({ isPlaying: false });
    };

    render() {
        return (
            <>
                <Container> 
                    <div id="test" className="mainLand">
                        <Landing />
                    </div>
                </Container>
                <Container>
                    <div className="postVid" id="issueHome">
                        <p className="huearewepre" >What is TEDxUCSD?</p>
                        <p className="huearewe">TEDxUCSD’s mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline - technology, entertainment, design, science, humanities, business, development, and much more. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately their world.</p>
                    </div>
                </Container>
                
                <Container style={{paddingTop:"2rem"}}>
                        <p className="huearewepre" >Learn more</p>
                        
                        <Row style={{paddingTop:"2rem"}}>
                            <Col><p className="huearewe">Picture for nominating</p></Col>
                            <Col><p className="huearewe">Description</p></Col>
                        </Row>
                        
                        <Row style={{paddingTop:"8rem"}}>
                            <Col><p className="huearewe">We started a podcast!</p> <p className="huearewe">1200+ Acres is... I am so tired y'all. Why windystormy</p></Col>
                            <Col><img src={podcast} className="image zoom"/></Col>
                        </Row>
                        
                    
                </Container>
                
            </>
        )
    }
}
export default connect(null, { setTheme })(Home);