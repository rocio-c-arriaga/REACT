import React from 'react';
import withRouter from 'react-router-dom/withRouter';

const UserArea = ({ location }) => (
    <>
        {location.pathname === '/' ? 'Logged Out' : 'Logged In'}
    </>
);

export default withRouter(UserArea);
/*
<div classname='userarea'>
    <h1>UserArea</h1>
</div>
*/