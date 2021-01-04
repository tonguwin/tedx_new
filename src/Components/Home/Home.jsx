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
                
                <div id="test" className="mainLand">
                    <Landing />
                </div>
                <Container>
                    <div className="postVid" id="issueHome">
                        <p className="huearewepre" >What is TEDxUCSD?</p>
                        <p className="huearewe">TEDxUCSD’s mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline - technology, entertainment, design, science, humanities, business, development, and much more. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately their world.</p>
                    </div>
                </Container>
                <Container>
                    <div className="postVid" id="issueHome">
                        <p className="huearewepre" >Learn more</p>
                        <p className="huearewe">two videos, some descriptions blah blah</p>
                    </div>
                </Container>
                <NavBar className="myNav secondaryNav">
                    <div
                        style={{
                            width: '100%',
                            whiteSpace: 'nowrap',
                        }}
                        className="announcement"
                    >
                        <Marquee speed="0.08" direction="right">Welcome to TEDxUCSD | "Ideas Worth Spreading" | Welcome to TEDxUCSD | "Ideas Worth Spreading" | Welcome to TEDxUCSD | "Ideas Worth Spreading" |</Marquee>
                    </div>


                </NavBar>
            </>
        )
    }
}
export default connect(null, { setTheme })(Home);