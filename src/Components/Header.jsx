import React from 'react'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';import "../Styles/header.css"
function Header() {
    return (
            <Navbar className="navbar" bg="primary" expand="lg" data-bs-theme="dark">
                <Navbar.Brand  className="homePage" href="/">MyFishingSpot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <Nav.Link className="section" href="/lures">Señuelos</Nav.Link>
                        <Nav.Link className="section" href="/rods">Cañas</Nav.Link>
                        <Nav.Link className="section" href="/reels">Carretes</Nav.Link>
                        <Nav.Link className="section" href="/shoppingcart">Cesta</Nav.Link>
                        <Nav.Link className="section" href="/opinions">Opiniones</Nav.Link>
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