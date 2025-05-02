import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="leaf-outline"></ion-icon>
              <h1>WasteCo</h1>
            </div>
            <p>
              At WasteCo, we believe in the power of sustainable choices. Our
              eco-packaging solutions are designed to minimize environmental
              impact while providing top-quality protection for your products.
              Together, we can reduce waste and build a greener future.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Story</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                100/25 Sukhumvit Road, Klongtoey, Bangkok 10110, Thailand{" "}
              </li>
              <li>Email: wasteCo.help@gmail.com</li>
              <li>Phone: +66 89 123 4567</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
