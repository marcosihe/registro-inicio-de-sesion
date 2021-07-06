import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="ms-3">
        MH
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;