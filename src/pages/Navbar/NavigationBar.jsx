import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => [
    logOut()
      .then()
      .catch(error => console.log(error))
  ]
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-danger">Chef's Delight</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
                style={{ color: 'white' }
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className="nav-link"
                activeClassName="active"
                style={{ color: 'white' }}
              >
                Blog
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link>
                <FontAwesomeIcon icon="user" style={{ color: 'white' }} />
              </Nav.Link>
              <Nav.Link href="#deets" className="text-white">User</Nav.Link>
              <Nav.Link>
                <i style={{ color: 'wheat' }} class="fa-solid fa-user"></i>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user ?
                  <Button onClick={handleLogOut} variant="secondary" className="btn btn-danger">Logout</Button> :
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


