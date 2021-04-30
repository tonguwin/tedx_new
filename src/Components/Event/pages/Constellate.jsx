import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Event.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';


import Constellate1 from '../images/constellate_title.png';

import eric from '../images/cropped-eric.jpeg';
import mayuko from '../images/mayuko.png';
import jason from '../images/jason_new.png';
import nefti from '../images/nefti.jpg';
import leon from '../images/leon.jpg';
import katherine from '../images/katherine_new.jpg';

// ALTHOUGH THIS PAGE IS CALLED CONTACT -- It's Sponsors


class Constellate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                      
            <Container>
                <Row>
                    <p className="events">
                        Constellate
                    </p>
                </Row>
                <Row>
                    <p className="date">
                        May 15-16th, 2021 | Zoom
                    </p>
                </Row>
                <Row>
                    <img src={Constellate1} className="image"/>
                </Row>
                <Row className="center1" style={{paddingTop:"2rem"}}>
                    <a className="btn btn-5" href="https://ucsd.zoom.us/meeting/register/tJUpdO2hpjojH9Q_VcfON0o59dvh4Cc75pdX?fbclid=IwAR0bl5awWAQGBqsoXQhQK54LYDPtngt0B4Yuon57v4danwgWVgoSqHtiG4Y" target="_blank">Pre-Register</a>
                </Row>
                <Row style={{paddingTop:"4rem"}}>
                    <Col>
                        <p className="date">
                            Event Description:
                        </p>
                    </Col>
                    <Col style={{paddingTop:"1rem"}}>
                        <p className="des">"Constellate" returns us to a world of child-like wonder, a time when the questions we asked were beyond ourselves - a time when we were so furiously curious of the immense space called the Unknown.</p>

                        <p className="des" style={{paddingTop:"1rem"}}>We are reminded that we can only connect the dots as we go. When we embrace the fact that we each play a unique part in a bigger story, then one day, we will together be in awe and peace when we step back and see how our paths have gathered us together and intertwined to form an intricate constellation far more beautiful and magnificent than we could have ever imagined.</p>
                    </Col>
                </Row>
                <Row>
                    <p className="date" style={{paddingTop:"5rem"}}>
                        Speaker List: 
                    </p>
                </Row>
                
                <Row style={{paddingTop:"2rem"}}>
                    <Col>
                        <img src={eric} className="image"/>
                    </Col>
                    <Col>
                        <p className="date">Eric Sullivan</p>

                        <p className="des" style={{paddingTop:"1rem"}}>Eric Sullivan is San Jose's Central YMCA’s Youth Sports Program Director, handling everything from logistics to refereeing games and coaching his own teams. Since taking over the program, Eric has made it his mission to cultivate a robust and diverse community centered around sports, transforming the Central YMCA’s youth basketball league into a nationally-recognized program in the process. Eric has witnessed firsthand the potential for sports to bring people together, and teach us all valuable lessons about ourselves and the world around us.</p>
                    </Col>
                </Row>

                <Row style={{paddingTop:"5rem"}}>
                    <Col>
                        <p className="date">Mayuko Inoue</p>

                        <p className="des" style={{paddingTop:"1rem"}}>Mayuko Inoue is a Content Creator and Software Engineer based in San Diego, CA. After graduating from UC San Diego with a degree in Computer Science and a career in iOS Development working in Silicon Valley, she’s amassed a following of over half a million people online primarily through her YouTube. She dedicates her content to helping people find their way through the tech industry by sharing her own experiences, and is passionate about discussions around mental health, cultural identity, and creating technology with empathy and compassion.</p>
                    </Col>
                    <Col>
                         <img src={mayuko} className="image"/>
                    </Col>
                </Row>

                <Row style={{paddingTop:"5rem"}}>
                    <Col>
                        <img src={nefti} className="image"/>
                    </Col>
                    <Col>
                        <p className="date">Neftali Camacho</p>

                        <p className="des" style={{paddingTop:"1rem"}}>After receiving his B.S in Zoology from California State Polytechnic University, Pomona, Neftali Camacho joined the Natural History Museum of Los Angeles County in 2002 as a curatorial assistant. He worked with various collections which included marine invertebrates and later worked with the Ichthyology and herpetology collections. In 2010, he became the Herpetology Collection Manager. From the Komodo dragon to the small California legless lizard, Neftali gets an immense sense of satisfaction knowing that the work he does will be useful for understanding such fascinating, but often a misunderstood group of animals.</p>
                    </Col>
                </Row>

                <Row style={{paddingTop:"5rem"}}>
                    <Col>
                        <p className="date">Leon Logothesis</p>

                        <p className="des" style={{paddingTop:"1rem"}}>Before Leon Logothetis became a global adventurer, TV host, motivational speaker, and best-selling author, he was living an uninspired and disconnected life as a London broker. He decided to do something radical about it – give it all up for a life on the road. He embarked on an adventure around the globe, fueled by the receiving and giving of kindness - traveling to over 100 countries and to every continent. He’s documented his experiences and has devoted his life to inspiring the world with his message, best shown through his Netflix series “The Kindness Diaries.”</p>
                    </Col>
                    <Col>
                        <img src={leon} className="image"/>
                    </Col>
                </Row>

                <Row style={{paddingTop:"5rem"}}>
                    <Col>
                        <img src={katherine} className="image"/>
                    </Col>
                    <Col>
                        <p className="date">Katherine Gray</p>

                        <p className="des" style={{paddingTop:"1rem"}}>Katherine Gray is a glass artist and art professor at California State University, San Bernardino. Gray creates functional art, including vases, chandeliers, candelabras, as well as works that "defy functionality." She makes use of transparency in her work and has based a lot of her work around the “polarities” in glass: both literally and metaphorically. Her works are in the renowned Corning Museum of Glass, the Museum of American Glass, and the Tacoma Museum of Glass. Gray recently appeared as a resident evaluator on the Netflix show, Blown Away.</p>
                    </Col>
                </Row>

                <Row style={{paddingTop:"5rem"}}>
                    <Col>
                    <p className="date">Jason Licker</p>

                        <p className="des" style={{paddingTop:"1rem"}}>Jason’s passion for pastry, life and travel has taken him across the globe for a true culinary experience. His first internship was at Union Square Café in New York while training at the French Culinary Institute’s Pastry Arts Program. Jason then earned a pastry cook position in the world renown Jean Georges Restaurant, an experience which prepared him for his first Pastry Chef position at Metrazur for Charlie Palmer at the age of 23. Jason then opened the The Shore Club in Miami Beach where he was promoted to Executive Pastry Chef overseeing all Food and Beverage Outlets including Nobu Miami Beach, where Jason was first exposed to Asian Cuisine. Jason has held Executive Pastry Chef positions at the Peninsula New York, The Westin Bund in Shanghai, The Venetian Macau Hotel and Resort, The JW Marriott Hong Kong and formerly was the Corporate Pastry Chef for Cé La Vi Restaurants Worldwide. His win at Iron Chef Thailand is an affirmation of his elite Pastry status.</p>
                    </Col>
                    <Col>
                        <img src={jason} className="image"/>
                    </Col>
                </Row>
            

              
            </Container>
            
            </>
        )
    }
}
export default connect()(Constellate);