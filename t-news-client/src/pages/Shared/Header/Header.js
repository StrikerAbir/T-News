import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LeftNav from "../LeftNav/LeftNav";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  }
  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">T-News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <span className="me-3">{user?.displayName}</span>
                    <Link to='/profile'>
                      {user?.photoURL ? (
                        <Image
                          style={{ height: "40px" }}
                          roundedCircle
                          src={user.photoURL}
                        ></Image>
                      ) : (
                        <FaUser></FaUser>
                      )}
                    </Link>
                  </div>
                  <Button onClick={handleLogOut} variant="light border">
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link className="me-3" to="/login">
                    Login
                  </Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </>
          </Nav>
          <div className="d-lg-none">
            <LeftNav></LeftNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
