import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../Assets/res-logo.png";
import "../../Stylesheet/Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// -----------------------
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5><span style={{color:"red"}}>Q</span>uick <span style={{color:"red"}}>B</span>ite</h5>
              <p>
                Exploring global flavors in every bite, from mouthwatering
                pizzas to juicy burgers. Unleash your taste buds with our
                innovative fusion app.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Saturday- Sunday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: 15/24A, Nagercoil</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 9876543210</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: quickbite@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">
              Welcome to the delectable world of flavors!
            </h5>

            <div className="Footer-Foodie-img">
              <img
                style={{ width: "170px", height: "170px" }}
                src="https://static.wixstatic.com/media/d11de3_55f75c2e59b247339ee43e524da4f885~mv2.png/v1/fill/w_422,h_422,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Twisted%20Foodie%20Logo%20(1).png"
                alt="Foodie"
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
            <p className="copyright__text">
              @Copyright - 2023, website made Nivetha T.<br></br> All Rights Reserved.
            </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
