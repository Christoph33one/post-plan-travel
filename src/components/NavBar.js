import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png';
import styles from '../styles/Navbar.module.css';
import { NavLink } from "react-router-dom";

/* NavBar component*/
const NavBar = () => {
  return <Navbar className={styles.Navbar} bg="dark" variant="dark" expand="md" fixed="top">
  <Container>
    <NavLink to="/">
    <Navbar.Brand><img src={logo} alt="logo" height="45" />
    </Navbar.Brand>
    </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto text-uppercase align-items-start">

        <NavLink exact
          className={styles.NavLink} activeClassName={styles.Active} to="/">
          <i className="fas fa-home"></i>Home
          </NavLink>

        <NavLink 
          className={styles.NavLink} 
          activeClassName={styles.Active} 
            to="/locations"><i className="fas fa-search-location"></i>Locations
          </NavLink>

        <NavLink 
          className={styles.NavLink}
          activeClassName={styles.Active}
           to="/signup"><i className="fas fa-sign-in-alt"></i>Sign in
        </NavLink>

        <NavLink 
          className={styles.NavLink}
          activeClassName={styles.Active}
           to="/signin"><i className="fas fa-user-plus"></i>Sign up
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

}

export default NavBar;