import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styles from "../components/Menu.module.css";
import { auth } from "../firebaseConfig";

const Menu = () => {
  const historial = useHistory();
  const [usuario, setUsuario] = useState(null);
  useEffect( () => {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        setUsuario(user.email);
      }
    } )
  },[])

  const cerrarSesion = () => {
    auth.signOut();
    setUsuario(null);
    historial.push('/');
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="ms-3">
        <span className={styles.letraM}>M</span>
        <span className={styles.letraH}>H</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link ms-3" to="/">Inicio</Link>
          <Link className="nav-link ms-3" to="/login">Login</Link>
          <Link className="nav-link ms-3" to="/admin">Admin</Link>
        </Nav>
      {usuario ? (<Button variant="danger" className="ms-auto me-3" onClick={cerrarSesion}>Cerrar sesión</Button>) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
