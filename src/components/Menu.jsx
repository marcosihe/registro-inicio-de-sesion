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
    <Navbar bg="dark" variant="dark" expand="lg" className="container">
      <Navbar.Brand href="#home" className="ms-3">
        <span className={styles.letraM}>M</span>
        <span className={styles.letraH}>H</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className="nav-link ms-3" to="/">Inicio</Link>
          {!usuario ? (<Link className="nav-link ms-3" to="/login">Login</Link>) : null}
          {usuario === "usuario@admin.com" ? (<Link className="nav-link ms-3" to="/admin">Admin</Link>) : null}
        </Nav>
        {usuario ? (<Button variant="danger" className="ms-3 me-3" onClick={cerrarSesion}>Cerrar sesión</Button>) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
