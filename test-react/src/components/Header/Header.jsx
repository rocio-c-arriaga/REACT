import React from 'react';

//Components
import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';

import'./Header.css';

const Header = () => (
    <div className="Header">
       <Logo />
     <h1 class="text-left">en-Ruta</h1>
       <UserArea/>
    </div>
);
// <UserArea loggedIn/>

export default Header;