import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
// import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaBusAlt, FaRoute, FaUserFriends } from 'react-icons/fa'
import { AiOutlineSchedule } from 'react-icons/ai'
import '../assets/Styles/Pages/Dashboard.scss'
import Doughnut from '../Components/Chart/Doughnut'
import Card from '../Components/Card'
import Busses from './Busses/Busses'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={2}>
              <Link className='logoDashboard' to='/'>Dashboard</Link>
              <div className="wrap-link">
                <Link to='/dashboard/bus'> <p>Bus</p> <FaBusAlt/></Link>
                <Link to='/dashboard/schedules'><p>Schedules</p><AiOutlineSchedule /></Link>
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
              <Row>
                <Col md={12}>
                  <Busses />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
