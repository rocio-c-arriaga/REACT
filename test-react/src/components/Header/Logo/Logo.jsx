import React from 'react';
import Logoimage from './BiciHeadblanco.svg'
import Link from 'react-router-dom/Link';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Logo = () => (
    <Link to="/">
        <Col xs={3} md={2}>
            <Image src={Logoimage} 
            alt=""
            width="50"
            height="50"
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

