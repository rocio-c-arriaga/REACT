import React from 'react';

//Components
import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';

import'./Header.css';

const Header = () => (
    <div className="Header">
       <Logo />
     <h1 class="text-left">n-Ruta</h1>
       <UserArea/>
    </div>
);
// <UserArea loggedIn/>

export default Header;
/*
<Navbar>
<Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
  <Navbar.Text>
    Signed in as: <a href="#login">Mark Otto</a>
  </Navbar.Text>
</Navbar.Collapse>
</Navbar>*/