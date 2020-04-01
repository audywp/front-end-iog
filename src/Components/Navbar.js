import React, { useState, useEffect } from 'react'
import '../assets/Styles/Components/Navbar.scss'
import { Link } from 'react-router-dom'
import {
  Navbar as Navigation,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Navbar =  (props) => {
    return (
      <>
        <Navigation expand="md">
          <NavbarBrand>IOG</NavbarBrand>
          <NavbarToggler />
          
            <Nav>
              <NavItem>
                <NavLink>
                  <Link to='/dashboard'>Dashboard</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  Login
                </NavLink>
              </NavItem>
            </Nav>
        </Navigation>
      </>
    )
  
}

export default Navbar
