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
import scout from './images/scout.png';


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
                        <p className="huearewepre" >What is <span style={{color: '#FF2B06'}}> TEDx</span>UCSD?</p>
                        <p className="huearewe">TEDxUCSD’s mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline - technology, entertainment, design, science, humanities, business, development, and much more. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately their world.</p>
                    </div>
                </Container>
                
                <Container style={{paddingTop:"6rem"}}>
                        <p className="huearewepre" >TEDx Highlights</p>
                        
                        <Row className="centering" style={{paddingTop:"2rem"}}>
                            <Col>
                                <a class="scout" href="https://forms.gle/pY5j1NhwK1K4b4BBA" target="_blank">
                                <img src={scout} className="image zoom2"/>
                                </a>
                            </Col>
                            <Col style={{paddingTop:"4rem"}}><p className="huearewe centering">We're recruiting scouts!</p>
                            <p className="text centering">TEDxUCSD is recruiting for undergraduate UCSD interns who are interested in getting to know more about our behind-the-scenes work, learn from our team members, execute their own projects, and join us as we prep for out annual main conference</p>
                            <a className="btn btn-51" href="https://forms.gle/pY5j1NhwK1K4b4BBA" target="_blank" >Apply Now</a>
                            </Col>
                        </Row>
                        
                        <Row className="centering" style={{paddingTop:"4rem"}}>
                            <Col style={{paddingTop:"4rem"}}><p className="huearewe centering">We started a podcast!</p> 
                            <p className="text centering">UC San Diego is made of 1200+ acres and even more untold stories from the students who go here. Join the TEDxUCSD team every Friday as we interview UC San Diego students who have ideas worth spreading. Every episode will plunge you into their powerful stories and leave you with a refreshing new perspective.</p>
                            <a className="btn btn-51" href="https://open.spotify.com/show/2kth4uP5hxQNnZezWpW2RL?si=8j3gddehQWqfO9HkRl1S7A" target="_blank" >Listen on Spotify</a>
                            </Col>

                            <Col>
                                <a class="podcast" href="https://open.spotify.com/show/2kth4uP5hxQNnZezWpW2RL?si=8j3gddehQWqfO9HkRl1S7A" target="_blank">
                                <img src={podcast} className="image zoom2"/>
                                </a>
                            </Col>
                        </Row>
                        
                    
                </Container>
                
               
            </>
        )
    }
}
// I can't for the life of me figure out which css file is for the gravity picture ahhh - Han
export default connect(null, { setTheme })(Home);