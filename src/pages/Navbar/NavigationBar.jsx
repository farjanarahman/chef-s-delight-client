import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut=()=>[
    logOut()
    .then()
    .catch(error=>console.log(error))
  ]
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-danger">Chef's Delight</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Home</Nav.Link> */}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "15px",
                }}
              >
                Home
              </Link>
              {/* <Nav.Link href="#pricing">BLog</Nav.Link> */}
              <Link
                to="/blog" className="text-white"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "15px",
                }}
              >
                Blog
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="text-white">Farjana</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user ?
                <Button onClick={handleLogOut} variant="secondary" className="btn btn-danger">Logout</Button>:
                <Link to="/login">
                <Button variant="secondary" className="btn btn-warning">Login</Button>
              </Link>
                }
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
