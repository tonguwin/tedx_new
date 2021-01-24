import React, {Component} from 'react';
import './Event.css';
import { connect } from 'react-redux';


import {useState} from 'react';
import {Container, Row, Col, Card, Button, Modal, Nav, NavDropdown, Navbar} from 'react-bootstrap';
import {ColourWheel} from '../ColourWheel';
import '../../animation.css';
import data from '../../data.json';
import popupData from '../../popup.json';
import ReactPlayer from 'react-player';
import promoVid from '../../img/promo.mp4';
import promoVidThumbnail from '../../img/thumbnail.png';
import { Link, animateScroll as scroll } from "react-scroll";
import pageBreak from '../../img/pagebreak.png';
import Marquee from 'react-double-marquee';
import NavBar from 'react-bootstrap/Navbar';
import Recruit from '../../img/Issue2/JOIN.gif';

// Temp Images
import Constellate from './images/constellate_title.png';
import YourGravity from './images/your_gravity_title.jpg';
import ShiftEnter from './images/shift_enter_title.png';

const black = '#000000';

class Event extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state={
            background:"white",
            loaderVis:false, //should be false
            mainPageVis: false,
            LoaderDiv: true,
            show: null,
            showDoodle: 0,
            isOpen: false,
            navType: true,
            opacity: 0.3,
            hovered: null,
        };
        this.interval=null;
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.checkColor = this.checkColor.bind(this);
        this.handleCloseDoodle = this.handleCloseDoodle.bind(this);
        this.handleShowDoodle = this.handleShowDoodle.bind(this);
        this.handleShowDoodle2 = this.handleShowDoodle2.bind(this);
        this.iterateNextCard = this.iterateNextCard.bind(this);
        this.iteratePrevCard = this.iteratePrevCard.bind(this);
        this.handleNavOpen = this.handleNavOpen.bind(this);
        this.handleNavClose = this.handleNavClose.bind(this);
        this.setOpacity = this.setOpacity.bind(this);
        this.handleTransform = this.handleTransform.bind(this);
        this.handleNonTransform = this.handleNonTransform.bind(this);
    }

    setOpacity() {
        this.setState({opacity: 1});
    }
    handleNavOpen = () => {
        this.setState({ isOpen: true });
        this.setState({navType: false})
      }
    
      handleNavClose = () => {
         this.setState({ isOpen: false });
         this.setState({navType:true});
      }


    /*Close popup card*/ 
    handleClose() {
        this.setState({show: null});
    }
    /*Show corresponding popup card*/
    handleShow(id) {
        this.setState({show: id});
    }
    handleTransform(id) {
        this.setState({hovered: id});
    }
    handleNonTransform() {
        this.setState({hovered: null});
    }
    handleCloseDoodle() {
        this.setState({showDoodle:0});
    }
  handleShowDoodle() {
        this.setState({showDoodle:1});
    }
  handleShowDoodle2() {
        this.setState({showDoodle:2});
    }

  /* This is for mobile. Checks color and sets default to white */
  checkColor() {
        const test = "rgb(0, 0, 0)";
        if (test==this.state.background) {
            this.setState({background:"white"})
        }
  }

  /*Next 2 functions for arrow buttons to scroll through cards */
  iterateNextCard() {
      const show = this.state.show;
      if (show!=null && show<16) {
          this.setState({show:show+1});
      }
      else if (show==16) {
          this.setState({show:1});
      }
  }
  iteratePrevCard() {
    const show = this.state.show;
      if (show!=null && show>1) {
          this.setState({show:show-1});
      }
      else if (show==1) {
          this.setState({show:16});
      }
  }
  toggle() {
      this.setState(prevState => ({
          isOpen: !prevState.isOpen}
     ));
  }

    /**Creates the popup cards using the data JSON file */
    renderModals() {
        return popupData.map(data => {
          return (
              <div>
              <Modal
              dialogClassName="modal-90w"
              backdropOpacity={1}
                show={this.state.show === data.id} onHide={this.handleClose} 
                className="my-auto h-100"
              > 
              <Row style={{maxHeight:"100%"}}>
                {/*Arrow to iterate cards*/} 
                <Col xs={1} md={1} style={{textAlign:"left"}} className="mx-auto my-auto centerBlock" >
                <img onClick={this.iteratePrevCard} src={require(`../../img/arrow2.png`)} className="mx-auto d-block img-fluid mouseDoodle" ></img>
                </Col>

                <Col md={10} className="my-auto" style={{maxHeight:"100%"}}>

                <Card className="myCard" style={{height:"820px", backgroundColor:"transparent"}}>

                 {/*Top of the card*/}   
                <div className="TOPCARD mx-auto" style={{backgroundColor:data.color1}}>
                    {/*Member Name*/}
                    <Row className="justify-content-center align-items-center">
                        <Col xs={12} md={12} className="mx-auto">
                            <Card.Title className="cardName">{data.name}</Card.Title>
                        </Col>
                    </Row>

                    {/*Member role, picture, major*/}
                    <Row>

                        <Col xs={2} md={1} className="d-flex justify-content-center align-items-center marginLeft">
                            <p className="text-align sidebar1">{data.role}</p>
                        </Col>

                        <Col xs={8} md={6} className="mx-auto my-auto"> 
                            {/*Checks which sketch drawing to show*/}
                            {this.state.showDoodle == 0 ? <Card.Img className="img-fluid d-block" src={require(`../../Members/Sketch/${data.image}.png`)}/> : (this.state.showDoodle == 1 ? <Card.Img className="img-fluid d-block" src={require(`../../Members/Sketch/${data.image}2.png`)}/> : <Card.Img className="img-fluid d-block" src={require(`../../Members/Sketch/${data.image}3.png`)}/>)}

                        </Col>

                        <Col xs={2} md={1} className="d-flex justify-content-center align-items-center marginRight">
                            <p className="text-align sidebar2">{data.major}</p> 
                        </Col> 

                    </Row>

                    {/*Color 1*/}       
                    <Row>
                        <Col className="mt-auto">
                            <p className="color" style={{textAlign:"right"}}>{data.color1}</p>
                        </Col>
                    </Row>
                </div>
                
                {/*Mid of the card*/}
                <div className="MIDCARD" style={{backgroundColor:data.color2}}>
                    {/*Bio and secondary color*/}
                    <Row>
                        <Col>
                        <Card.Subtitle className="memberBio">
                            <div style={{marginTop:"5%", marginLeft:"2.5em", marginRight:"2.5em"}}>
                            {/*Checks if user mouses over bolded words. Will render doodles if so*/}
                              <p>{data.bio}
                              <a onMouseOver={this.handleShowDoodle} onMouseLeave={this.handleCloseDoodle} className="mouseDoodle">{data.bio2}</a>
                              {data.bio3}
                              <a onMouseOver={this.handleShowDoodle2} onMouseLeave={this.handleCloseDoodle} className="mouseDoodle">{data.bio4}</a>
                              {data.bio5}</p>
                            </div>
                        </Card.Subtitle>
                        </Col>
                    </Row>
                    {/*Secondary color*/}
                    <Row>
                        <Col className="mt-auto">
                            <p className="color" style={{textAlign:"right"}}>{data.color2}</p>
                        </Col>
                    </Row>
                </div>
                
                {/*Bottom of card*/}
                <div className="BOTCARD" style={{backgroundColor:data.color3}}>
                        {/*Social media*/}
                        <Row>
                            <Col>
                            <Card.Subtitle className="memberBio">
                                
                                <div style={{marginTop:"2em", marginLeft:"2.5em", marginRight:"2.5em"}}>
                                {data.linkedin ?
                                    <a href={data.linkedin} target="_blank" className="secondCardMedia mediaPad">
                                        <img src={require(`../../img/linkedIN.png`)} className="smallLogo"></img>
                                    </a> : null }
                                    <a href={data.instagram} target="_blank"  className="secondCardMedia ">
                                        <img src={require(`../../img/instagram.png`)}  className="smallLogo"></img>
                                    </a>
                                </div>
                                </Card.Subtitle>
                            </Col>
                        </Row>
                    {/*Third color*/}
                    <Row>
                        <Col className="mt-auto">
                            <p className="color" style={{textAlign:"right"}}>{data.color3}</p>
                        </Col>
                    </Row>                       
                </div>   

                </Card>
              </Col>
              {/*Arrow to iterate cards*/}
              <Col xs={1} md={1} style={{textAlign:"left"}} className="mx-auto my-auto centerBlock" >
                    <img onClick={this.iterateNextCard} src={require(`../../img/arrow1.png`)} className="mx-auto d-block img-fluid mouseDoodle" ></img>
                </Col>
              </Row>
              </Modal>
              </div>
          )
        });
      }
    render() {    
        return (
            
            /*This div spans entire page*/
            <div style={{backgroundColor:"#121212",minHeight:"100vh"}}>
                                <a href="https://docs.google.com/document/d/119WbGNpObYxrE8r0RxY6_ZAQRS1KrxjTXHA3HRX4QSA/edit" target="_blank">
                    <img src={Recruit} className="Recruitment" />
                </a>
            <Container className="d-flex flex-column justify-content-center align-self-center container-fluid my-auto">

            {/*FROM HERE IS THE MAIN PAGE*/}
                                {/*When the HUE logo is clicked, mainPageVis is set to true and the main page content is shown*/}
          
                <div className="page">
                    {/*This is the top left logo that takes the color of the user*/}
                    {/*This function call checks the returned color. If it is black, returns white instead*/}
                    {/*Promo Video*/}
                    {/*
                    <Row style={{paddingTop:"4rem", paddingBottom:"4rem"}}>
                        <Col id="video">
                            <div className="wrapper">
                        <ReactPlayer className="myPlayer" width="100%" height="100%" url={require(`../../img/promo.mp4`)} playIcon={<img src={require(`../../img/playIcon.png`)}></img>} controls={true} style={{opacity:this.state.opacity}} onPlay={this.setOpacity} playing light={require(`../../img/thumbnail.png`)} ></ReactPlayer>
                        </div>
                        </Col>
                    </Row>*/}
                    {/*About Section*/}
                    <Row>
                        <p className="event">
                        Events
                        </p>
                    </Row>
                    <Row  id="about">
                        <Col>
                        <p className="events">Events</p>
                        </Col>
                        <Col>
                        <p className="second-twenty">- 2021</p>
                        </Col>
                    </Row>
                    
                    {/*<Row >
                        <Col>
                            <div className="box">
                                <p className="twenty-one"> 2021 </p>
                            </div>
                        </Col>
                    </Row>*/}
                    
                    {/* This container is the initial main conf skeleton */}
                    <Container id="main">
                        <Row id="conf title" style={{paddingTop:"2rem"}}>
                            <p className="huearewepre"> Main Conference 
                            </p>
                        </Row>
                        <Row style={{paddingTop:"2rem"}}>
                            <Col>
                                <img src={Constellate} className="image zoom"/>
                            </Col>
                            <Col style={{paddingLeft:"4rem"}}>
                                <Row>
                                    <p className="sub-head">Constellate</p>
                                </Row>
                                <Row>
                                    <p className="sub">"Constellate" returns us to a world of child-like wonder, a time when the questions we asked were beyond ourselves - a time when we were so furiously curious of the immense space called the Unknown.</p>
                                </Row>
                                <Row>
                                    <div className="btn btn-5">buttons?</div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    
                    {/* This container is the initial salon and infosesh */}
                    <Container style={{paddingTop:"6rem"}} id ="salon/info">
                        <Row>
                            <p className="huearewepre">Salons and Info-Sessions</p>
                        </Row>

                        
                        <Row style={{paddingTop:"2rem"}}>
                            <Col>
                                <img src={YourGravity} className="image zoom"/>
                            </Col>
                            <Col style={{paddingLeft:"4rem"}}>
                                <Row>
                                    <p className="sub-head">Your Gravity</p>
                                </Row>
                                <Row>
                                    <p className="sub">"Your Gravity" encourages you to give weight to the things you fall back on, the things that ground and center you, the things around which you revolve and from which you evolve. Gravity that we share is also omnipresent, connects us all, and pulls us together. What, then, lies at the center of this core of yours?</p>
                                </Row>
                                <Row>
                                    <a className="btn btn-5" href="https://www.facebook.com/events/474210180410354" target="_blank">Register</a>
                                </Row>
                            </Col>
                        </Row>
                        
                        <Row style={{paddingTop:"6rem"}}>
                            <Col>
                                <img src={ShiftEnter} className="image zoom"/>
                            </Col>
                            <Col style={{paddingLeft:"4rem"}}>
                                <Row>
                                    <p className="sub-head">Shift, Enter</p>
                                </Row>
                                <Row>
                                    <p className="sub">We all have experiences where we are moved off our paths, whether it be by curious choice or retrospective serendipity, and we are presented the opportunity to emerge into new terrain. Sometimes a paradigm shift is required before you make the next step into your lives. We invite you to shift alongside us, and enter TEDXUCSD 2020-2021.</p>
                                </Row>
                                <Row>
                                    <div className="btn btn-5">buttons?</div>
                                </Row>
                            </Col>
                        </Row>

                    </Container>
                </div>
             
            </Container>
            {/*This creates the whitelineat the bottom*/}
            {/*<NavBar className="myNav secondaryNav">
                        <div
                            style={{
                                width: '100%',
                                whiteSpace: 'nowrap',
                            }}
                            className="announcement"
                        >
                           
                        </div>


                    </NavBar>*/}
            </div>
        );
    }
}
export default connect()(Event);

