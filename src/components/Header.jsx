import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Manas from "../asserts/manas.jpg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          style={{ fontSize: "30px" }}
          onClick={() => navigate("/")}
        >
          My resume
        </Navbar.Brand>
        <Nav style={{ fontSize: "20px" }} className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>About me</Nav.Link>
          <Nav.Link onClick={() => navigate("/education")}>Education</Nav.Link>
          <Nav.Link onClick={() => navigate("/my-progress")}>
            My progress
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/skills")}>Skills</Nav.Link>
          <Nav.Link onClick={() => navigate("/contacts")}>Contacts</Nav.Link>
        </Nav>
        <img
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            marginLeft: "15px",
            border: "1px solid gray",
          }}
          width={60}
          height={80}
          src={Manas}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
