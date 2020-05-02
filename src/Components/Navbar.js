import React, { Component } from 'react'
import '../assets/Styles/Components/Navbar.scss'
import Login from '../Pages/Login'
import { Link } from 'react-router-dom'
import {
  Navbar as Navigation,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      close: true,
      inLogin: ''
    }

    if (localStorage.getItem('token')) {
      this.setState({
        inLogin: 'Logout'
      })
    } else {
      this.setState({
        inLogin: 'Login'
      })
    }
  }

  render () {
    return (
      <>
        <Navigation expand='md'>
          <NavbarBrand> <Link to='/'>IOG</Link> </NavbarBrand>
          <NavbarToggler />
          <Nav>
            <NavItem>
              <NavLink>
                <Link to='/dashboard'>Dashboard</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Login />
              </NavLink>
            </NavItem>
          </Nav>
        </Navigation>
      </>
    )
  }
}

export default Navbar
