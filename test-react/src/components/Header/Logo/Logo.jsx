import React from 'react';
import Logoimage from './logoB.png'
import Link from 'react-router-dom/Link';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Logo = () => (
    <Link to="/">
        <Col xs={6} md={4}>
            <Image src={Logoimage} roundedCircle 
            alt=""
            width="100"
            height="100"
            className="d-inline-block align-top"
            />
        </Col>
    </Link>
);

export default Logo;
  /*  <div>
      <h1 class="text-left">Logo</h1>
  </div>
 */

