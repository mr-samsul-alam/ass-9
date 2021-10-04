import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
 
const Header = () => {
 
 
    return (
 
 
 
        <div>
 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav>
                        <Navbar.Brand  href="/home"><img src="/logo-1.png" alt="" /></Navbar.Brand>
                        </Nav>
                        <Nav >
 
                            <NavLink to="/home" className="p-2 " 
                            style={{
                                textDecoration: 'none'
                                
                            }}activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Home</NavLink>
                            <NavLink to="/about"
                            className="p-2  "
                            style={{
                                textDecoration: 'none'
                            }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>About</NavLink>
                            <NavLink to="/courses"
                            className="p-2  "
                            style={{
                                textDecoration: 'none'
                            }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Courses</NavLink>
                            <NavLink to="/founders"
                            className="p-2  "
                            style={{
                                textDecoration: 'none'
                            }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Founders</NavLink>
 
 
 
 
                        </Nav>
                    </Navbar.Collapse>
 
                </Container>
            </Navbar>
        </div>
 
 
 
 
    );
};
 
export default Header;
 
 
 
 
 
 

