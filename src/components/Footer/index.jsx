import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Container >
    <div className="footer singleCol social-media-icon d-flex ">
  <a href="https://www.linkedin.com/in/dwiramdhanhijaya08/">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://github.com/Ramdhanhijaya08">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://dribbble.com/Ramdhanhijaya08/shots">
    <FontAwesomeIcon icon={faDribbble} />
  </a>
</div>
</Container>
  )
  }
export default Footer;
