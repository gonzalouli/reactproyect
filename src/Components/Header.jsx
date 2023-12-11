import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Form, FormControl, Button, NavLink} from 'react-bootstrap';import "../Styles/header.css"
function Header() {
    return (
            <Navbar className="navbar" bg="primary" expand="lg" data-bs-theme="dark">
                <LinkContainer to="/">
                    <Navbar.Brand  className="homePage">MyFishingSpot</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <LinkContainer to="/lures">
                            <Nav.Link className="section" >Señuelos</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/rods">
                            <Nav.Link className="section">Cañas</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/reels">
                            <Nav.Link className="section">Carretes</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/shoppingcart">
                            <Nav.Link className="section">Cesta</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/opinions">
                        <Nav.Link className="section" href="/opinions">Opiniones</Nav.Link>
                        </LinkContainer>
                        <Form inline="True" className="d-flex align-items-center">
                            <FormControl type="text" placeholder="Buscar" className="busqueda" />
                            <Button variant="outline-light" className="busquedaButton">Buscar</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Header;