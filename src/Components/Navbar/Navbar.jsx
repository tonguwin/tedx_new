import React, { Component, useState, useEffect } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import { NavDropdown, Nav, Image, DropdownButton } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { rootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import './Navbar.css';
import BlackLogo from '../../img/SP20/BlackLogo.png';
import WhiteLogo from '../../img/SP20/WhiteLogo.png';
import { HashLink } from 'react-router-hash-link';
const mapStateToProps = (state) => {
    return { color: state.color, theme: state.theme };
}
const Navbar = ({ color, theme }) => {
    const [redirect, redirectTo] = useState(null);
    const [myColor, setColor] = useState("white");
    const [myTheme, setTheme] = useState("black");
    useEffect(() => {
        if (color != undefined) {
            if (color.content != undefined) {
                setColor(color.content);
            }
        }
        if (theme != undefined) {
            if (theme.content != undefined) {
                setTheme(theme.content);
            }
        }
        if (redirect != null) {
            redirectTo(null);
        }
    }, [theme]);


    return (
        <div>
            {redirect && <Redirect to={redirect} />}

            <NavBar className={myTheme === "black" ? 'myNav' : 'myNav'} expand="lg">
                <NavBar.Brand className="navBrand" onClick={() => redirectTo('/')}>
                    {myTheme === "black" ? <img src={BlackLogo} className="imgTest" /> : <img src={BlackLogo} className="imgTest" />}

                </NavBar.Brand>
                <NavBar.Toggle aria-controls="responsive-navbar-nav" className={myTheme === "white" ? "navbar-light" : "navbar-dark"}/>
                <NavBar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className={myTheme === "black" ? 'navLinks' : 'navLinks'} onClick={() => redirectTo('/about')}>
                                About
                        </Nav.Link>
        
                        <Nav.Link className={myTheme === "black" ? 'navLinks' : 'navLinks'} onClick={() => redirectTo('/event')}>
                                Events
                        </Nav.Link>

                        <Nav.Link className={myTheme === "black" ? 'navLinks' : 'navLinks'} onClick={() => redirectTo('/sponsor')}>
                                Sponsors
                        </Nav.Link>

                    </Nav>
                </NavBar.Collapse>
            </NavBar>

        </div>
    )

}
export default connect(mapStateToProps)(Navbar);