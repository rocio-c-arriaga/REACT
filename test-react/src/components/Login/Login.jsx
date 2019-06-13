import React, { Component } from 'react';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom/';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from './Bslide2.jpg';
import img2 from './Bslide3.jpg';
import img3 from './Bslide9.jpg';
import img4 from './Bslide10.jpg';



// Actions
import { getDataWithQuery } from '../../utils/api';
import storage from '../../utils/storage';

import'./Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: false,
      loggedIn: false,
      usernameValid: true,
      passwordValid: true,
    }

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  updateUsername({ target }) {
    this.setState({ username: target.value, loginError: false });
  }

  updatePassword({ target }) {
    this.setState({ password: target.value, loginError: false });
  }

  checkUser(userData) {
    if (userData && userData.length) {
      storage.store('user', userData[0]);
      this.setState({ loggedIn: true });
      // console.log(storage.retreive('user'));
    } else {
      this.setState({ loginError: true });
    }
  }

  logIn() {
    const usernameValidation = Yup.string().required().isValid(this.state.username);
    const passwordValidation = Yup.string().required().isValid(this.state.password);
    Promise.all([usernameValidation, passwordValidation])
      .then(([usernameValid, passwordValid]) => {
        this.setState({ usernameValid, passwordValid });
        if (usernameValid && passwordValid) {
          getDataWithQuery('users', { ...this.state }).then(this.checkUser);
        }
      });
  }
  // getDataWithQuery(({...this.state}), 'users').then(this.checkUser);

  render() {

    let alert = null;
    if (this.state.loggedIn) {
      return (<Redirect to="/Menu" />);
    }
    if (this.state.loginError) {
      alert = (<Alert variant="danger">Check password or username!</Alert>);
    }
    return (
      <>
<div className="slides" class="" >
<Carousel>
<Carousel.Item>
  <img
    className="slide1"
    src={img1}
    alt="First slide"
    />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="slide2"
    src={img2}
    alt="Third slide"
    />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="slide3"
    src={img3}
    alt="Third slide"
    />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="slide4"
    src={img4}
    alt="Fourth slide"
    />
  <Carousel.Caption>
    <h4>First slide label</h4>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>

</Carousel>
</div>      


<div className="modulo">
      <Modal.Dialog>
        <Modal.Body>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.updateUsername}
              isInvalid={!this.state.usernameValid}
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.updatePassword}
              isInvalid={!this.state.passwordValid}
              />
          </Form.Group>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="button" onClick={this.logIn}>Log In</Button>
        </Modal.Footer>
        {alert}
    
      </Modal.Dialog>
</div>
      </>
    );
  }
}

export default Login;