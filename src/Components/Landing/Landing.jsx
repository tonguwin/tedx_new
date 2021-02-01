import React, { Component, useState } from 'react';
import { setTheme } from '../../redux/actions';
import promoVid from '../../img/promo.mp4';
import TestComponent from 'react-background-video-player';
import playIcon from '../../img/thumbnail.jpg';
import playVid from '../../img/Issue2/playInterview.png';
import pauseVid from '../../img/Issue2/pauseInterview.png';
import { connect } from 'react-redux';
import {Container} from 'react-bootstrap';
import './Landing.css';
import playVideo from '../../img/Issue2/playVideo.png';
import playVideoHover from '../../img/Issue2/playVideoHover.png';
import pauseVideo from '../../img/Issue2/pauseVideo.png';
import pauseVideoHover from '../../img/Issue2/pauseVideoHover.png';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import grav from '../Event/images/your_gravity_title.jpg';
import moon from './images/MOON.png';
import type from './images/type.png';


/* This page creates the video landing area at the beginning! We could easily remove it from home and remove this bought I thought keeping it would make for 
an interesting file to pull from and take inspo from... scroll down to past the return part which lets you play w html/css */






class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            progress: 0,
            currentTime: 0,
            duration: 0,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            showControls: false,
            hover: false,
        }
    }
    handleHover = () => {
        this.setState({ hover: !this.state.hover });
    }
    handleControlsOpen = () => {
        console.log('open');
        this.setState({ showControls: true });
        this.props.setTheme('transparent');
    }
    handleControlsClose = () => {
        if (this.state.isPlaying == true) {
            this.props.setTheme('hidden');
        }
        console.log('close');
        this.setState({ showControls: false });
    }
    componentDidMount() {
        this.props.setTheme('transparent');
    }
    componentWillUnmount() {
        this.props.setTheme('black');
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
        this.props.setTheme('hidden');
    }
    handleOnPlay = () => {
        this.setState({ isPlaying: true });
    };

    handleOnPause = () => {
        this.setState({ isPlaying: false });
        this.props.setTheme('transparent');
    };
    render() {
        
        return (
            <>
            <div style={{ width: ' 100%', height: '100%' }}>
                
                <Container>    
                    <p className="landit">Upcoming</p>
                    <a href="http://localhost:3000/yourgravity"><img src={grav} className="bigboy zoom1"/></a>
                </Container>
            </div>

            </>
        )
    }
}
export default connect(null, { setTheme })(Landing);

// Test Component creates the video window and that transition group creates the button 

/* <TestComponent
                        ref={p => this.player = p}
                        containerWidth={this.state.windowWidth}
                        containerHeight={this.state.windowHeight}
                        playsInline={false}
                        src={promoVid}
                        poster={playIcon}
                        onPlay={this.handleOnPlay}
                        onPause={this.handleOnPause}
                        onMute={this.handleOnMute}
                        onUnmute={this.handleOnUnmute}
                        onTimeUpdate={this.handleTimeUpdate}
                        startTime={0}
                        autoPlay={false}
                        volume={0.5}
                        loop={false}
                        onEnd={this.toggleMute}
                        className={this.state.isPlaying ? (this.state.showControls ? 'lightOpacity' : 'normalOpacity') : 'lightOpacity'}
                    /> */

/* <TransitionGroup component={null}>
                            <CSSTransition key={this.state.hover} timeout={5000} classNames="tester">
                                <button onClick={this.toggleTest} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className="playInterviewButton">
                                    <img src={(!this.state.isPlaying ? (this.state.hover ? playVideoHover : playVideo) :
                                        (!this.state.controls ? (this.state.hover ? pauseVideoHover : pauseVideo) : null))}
                                        className={this.state.isPlaying ? (this.state.showControls ? 'visibleButton play' : 'invisibleButton play') : 'visibleButton play'} />
                                </button>
                            </CSSTransition>
                        </TransitionGroup> */