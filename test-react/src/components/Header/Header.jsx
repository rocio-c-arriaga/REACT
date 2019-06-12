import React from 'react';

//Components
import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';

import'./Header.css';

const Header = () => (
    <div className="Header" fixed="top">
       <Logo />
     <h1 className="text-left" fixed="top">n-Ruta</h1>
       <UserArea/>
    </div>
);


export default Header;
