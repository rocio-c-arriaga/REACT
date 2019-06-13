import React from 'react';

//Components
import Logo from './Logo/Logo';

import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


import './Header.css';

const Header = () => (
  <>
  <div className="Header" fixed="top">
    <Logo />
    <h1 className="text-left" fixed="top">nRuta</h1>

  <Navbar collapseOnSelect className="bg-light justify-content-between">
    <Form inline>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          />
      </InputGroup>
    </Form>
    <Form inline>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
      <Button type="submit">Submit</Button>
    </Form>
  </Navbar>
  </div>
  </>
);


  export default Header;