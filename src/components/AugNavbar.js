import React from "react";
import {
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  Row,
} from "react-bootstrap";
import "./AugNavbar.css";

function AugNavbar() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar
              style={{
                backgroundColor: "#F3FAFE",
                paddingTop: "1.2rem",
                paddingBottom: "1.2rem",
              }}
              expand="md"
            >
              <Container>
                <Navbar.Brand>
                  <img
                    src="AugmntX-Logo.png"
                    style={{ width: "25%" }}
                    alt="AugmntX Logo"
                  />
                </Navbar.Brand>
                <NavbarToggle aria-controls="aug-nav" />
                <NavbarCollapse id="aug-nav">
                  <Nav>
                    <Nav.Link href="#">Why</Nav.Link>
                    <NavDropdown title="Industries" id="aug-nav">
                      <NavDropdown.Item href="#">Travel</NavDropdown.Item>
                      <NavDropdown.Item href="#">Automative</NavDropdown.Item>
                      <NavDropdown.Item href="#">Banking</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Capital Markets
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Health Care</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Digital Commerce
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">View All</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Find Dev</Nav.Link>
                    <Nav.Link href="#">Apply As vendor</Nav.Link>
                    <Nav.Link
                      href="#"
                      className="btn btn-sm btn-primary rounded-pill"
                      style={{
                        backgroundColor: "#5170FD",
                        color: "#ffffff",
                      
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      Hire Dev
                    </Nav.Link>
                    <Nav.Link>Login</Nav.Link>
                  </Nav>
                </NavbarCollapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AugNavbar;
