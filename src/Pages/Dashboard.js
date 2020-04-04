import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
// import styled from 'styled-components'
import {Link, BrowserRouter, Route as Rute, Switch} from 'react-router-dom'
import { FaSearch, FaBusAlt, FaRoute, FaUserFriends, FaUserTie } from 'react-icons/fa'
import { AiOutlineSchedule } from 'react-icons/ai'
import '../assets/Styles/Pages/Dashboard.scss'
import Doughnut from '../Components/Chart/Doughnut'
import Card from '../Components/Card'
import Busses from './Busses/Busses'
import Routes  from './Routes/Routes'
import Agent from './Agent/Agent'
import '../assets/Styles/Pages/Statis.scss'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Container>
          <Row>
            <Col md={2}>
              <Link className='logoDashboard' to='/'>Dashboard</Link>
              <div className="wrap-link">
                <Link to='/dashboard/schedules'><p>Schedules</p><AiOutlineSchedule /></Link>
                <Link to='/dashboard/agents'><p>Agents</p><FaUserTie/></Link>
                <Link to='/dashboard/bus'> <p>Bus</p> <FaBusAlt/></Link>
                <Link to='/dashboard/routes'><p>Route</p><FaRoute /></Link>
              </div>
            </Col>

            <Col md={10}>
              <Row>
                <Col md={4}>
                  <Doughnut />
                </Col>
                <Col md={8}>
                  <Card total={73} module='Bus' icon={< FaUserFriends />} />
                  <Card total={40} module='Route' icon={< FaRoute />} />
                  <Card total={24} module='Schedule' icon={< AiOutlineSchedule />} />
                </Col>
              </Row>
              <Row className='dataStatistik'>
                <Col md={12}>
                  <Switch>
                    <Rute component= { Busses } path='/dashboard/bus' exact />
                    <Rute component= { Agent } path= '/dashboard/agents' exact/>
                    <Rute component= { Routes } path='/dashboard/routes' exact />
                  </Switch>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </BrowserRouter>
      </>
    )
  }
}
