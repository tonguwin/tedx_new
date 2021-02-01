import React, {Component} from 'react';
import './About.css';
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

const black = '#000000';

class About extends Component {
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
                                
            <Container className="d-flex flex-column justify-content-center align-self-center container-fluid my-auto">

            {/*FROM HERE IS THE MAIN PAGE*/}
                                {/*When the HUE logo is clicked, mainPageVis is set to true and the main page content is shown*/}
          
                <div className="page">
                    <Row>
                        <p className="about">
                            About Us
                        </p>
                    </Row>
                    <Row style={{paddingTop:"4rem"}} id="about">
                        <Col>
                        <p className="huearewepre">What is <span style={{color: '#FF2B06'}}> TEDx</span>UCSD?</p>
                        </Col>
                    </Row>
                    <Row style={{paddingBottom:"4rem"}}>
                        <Col>
                        <p className="huearewe">TEDxUCSD’s mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline - technology, entertainment, design, science, humanities, business, development, and much more. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately their world.
                        </p>
                        </Col>
                    </Row>

                   
                    
                

                    {/*Meet the Team*/}
                    <Row id="team">
                        <Col>
                        <p className="meet1">Our "Get to Know Us" section is in development... 👷</p>
                        </Col>
                    </Row>

                    <Row >
                        <Col>
                        <p className="meet2">25 Students, 10 Subteams, 1 Family</p>
                        </Col>
                    </Row>
                    
                    {/*This takes a JSON file and creates the main cards */} 
                    {/*
                    <Row style={{marginBottom:"4rem"}}>
                        {data.map( data=> (
                            <Col xs={4} sm={6} md={3} className="marginCard" key={`${data.id}`}>
                                <Card className="firstCard myCard h-100 shadow-sm bg-white mobileCard" 
                                style={{margin:"auto"}} 
                                onClick={() => this.handleShow(data.id)} 
                                onMouseEnter={()=>this.handleTransform(data.id)} 
                                onMouseLeave={()=>this.handleNonTransform()} 
                                style={{transform: `${this.state.hovered===data.id ? 'scale(1.1,1.1)' : 'none'}`, transition:"0.25s ease-in-out"}}>
                                    
                                    <Card.Img className = "myCard" src={require(`../../Members/Picture/${data.image}.png`)}/>
                                    <Card.Body className="mobileCard2">
                                    <div className="mb-2 justify-content-between">
                                        <Card.Title className="mb-0 cardFont">{data.name}</Card.Title>
                                        <Card.Text className="cardFont2">{data.role}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row> *}

                   {/* <div style={{paddingTop:"4rem", paddingBottom:"8rem"}}>
                   <img src={pageBreak} style={{maxWidth:'100%'}}/>
                        </div> */}
                    
                    {/*Secondary social media*/}
{/*                     <Row>
                        <Col>
                        <p className="huearewepre">get in touch</p>
                        </Col>
                    </Row>

                    <Row id="contact">
                    <Col className="mx-auto justify-content-left align-items-center d-flex" style={{marginBottom:"4rem"}}>
                            <a href="https://www.facebook.com/HUEcollectives/" target="_blank">
                                <img src={require(`../../img/facebookwhite.png`)} style={{paddingRight:"2.5rem"}}></img>
                            </a>
                            <a href="https://www.instagram.com/hue.collective/" target="_blank">
                                <img src={require(`../../img/instagramwhite.png`)} style={{paddingRight:"2.5rem"}}></img>
                            </a>
                            <a href="https://www.linkedin.com/company/huecollective/" target="_blank">
                                <img src={require(`../../img/linkedINwhite.png`)}></img>
                            </a>
                    </Col>
                    </Row> */}

                </div>
              {/*This creates the popup for each card*/}
              {this.renderModals()}
            </Container>
            
            </div>
        );
    }
}
export default connect()(About);

