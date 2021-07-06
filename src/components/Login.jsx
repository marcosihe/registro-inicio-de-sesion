import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { auth } from '../firebaseConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            //auth/invalid-email
            if(e.code === "auth/invalid-email"){
                setErrorMessage("Formato de e-mail inválido.");
            }
            //auth/weak-password
            if(e.code === "auth/weak-password"){
                setErrorMessage("La clave debe tener como mínimo 6 caracteres.");
            }
        }
    }

  return (
    <Fragment>
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
          <Form onSubmit={ handleSubmit }>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control onChange={ (e) => { setEmail(e.target.value) } } type="email" placeholder="nombre@ejemplo.com" />
              <Form.Text className="text-muted">
                Tus datos están seguros.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="mt-4">Contraseña</Form.Label>
              <Form.Control onChange={ (e) => { setPassword(e.target.value) } } type="password" placeholder="clave" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Acepto los términos y condiciones." className="mt-4"/>
            </Form.Group>
            <Button variant="dark" type="submit" className="mt-4">
              Registrar usuario
            </Button>
          </Form>
        </div>
        <div className="col"></div>
        {
            errorMessage !== null ? (<div>{errorMessage}</div>) : null
        }
      </div>
    </Fragment>
  );
};

export default Login;
