import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../components/Menu.module.css";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="ms-3">
        <span className={styles.letraM}>M</span>
        <span className={styles.letraH}>H</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/login">
            Login
          </Link>

          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
