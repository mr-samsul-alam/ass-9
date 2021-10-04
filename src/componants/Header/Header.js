import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
 
const Header = () => {
 
 
    return (
 
 
 
        <div className="container">
 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Our Coaching Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
 
                            <NavLink to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Home</NavLink>
                            <NavLink to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>About</NavLink>
                            <NavLink to="/service"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Service</NavLink>
                            <NavLink to="/founders"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Founders</NavLink>
 
 
 
 
                        </Nav>
                        <Nav>
 
 
 
                        </Nav>
                    </Navbar.Collapse>
 
                </Container>
            </Navbar>
        </div>
 
 
 
 
    );
};
 
export default Header;
 
 
 
 
 
 

