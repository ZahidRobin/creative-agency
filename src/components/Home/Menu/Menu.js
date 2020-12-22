import React from 'react';
import {Button, Nav, Navbar } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import logo from '../../../images/logos/logo.png';
import './Menu.css'
const Menu = () => {
    return (
        <Navbar expand="md">
                <Navbar.Brand><Link to="">
                    <img src={logo}/>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav><Link to="/admin">Home</Link></Nav>
                        <Nav><Link to="">Our Portfolio</Link></Nav>
                        <Nav><Link to="">Our Team</Link></Nav>
                        <Nav><Link to="">Contact Us</Link></Nav>
                        <Nav><Link to="/login"><Button variant="dark">Login</Button></Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Menu;