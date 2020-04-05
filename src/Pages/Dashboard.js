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
import Schedules from './Schedules/Schedules'
import {getBus} from '../Redux/actions/Admin/Busses'
import {showRoutes} from '../Redux/actions/Admin/Route'
import {GetSchedules} from '../Redux/actions/Admin/Schedules'
import { connect } from 'react-redux'

class Dashboard extends Component {


  componentDidMount(){
    this.props.getBus()
    this.props.showRoutes()
    this.props.GetSchedules()
    console.log(this.props.Bus.data.pageInfo.totalData)
  }
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
                  <Card total={this.props.Bus.data.pageInfo && this.props.Bus.data.pageInfo.totalData} module='Bus' icon={< FaUserFriends />} />
                  <Card total={this.props.Routes.data.pageInfo && this.props.Routes.data.pageInfo.totalData} module='Route' icon={< FaRoute />} />
                  <Card total={this.props.Schedules.data.pageInfo && this.props.Schedules.data.pageInfo.totalData} module='Schedule' icon={< AiOutlineSchedule />} />
                </Col>
              </Row>
              <Row className='dataStatistik'>
                <Col md={12}>
                  <Switch>
                    <Rute component= { Busses } path='/dashboard/bus' exact />
                    <Rute component= { Agent } path= '/dashboard/agents' exact/>
                    <Rute component= { Routes } path='/dashboard/routes' exact />
                    <Rute component= { Schedules } path='/dashboard/schedules' exact />
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

const mapStateToProps = state => {
  return {
    Bus: state.Busses,
    Routes: state.Routes,
    Schedules: state.Schedules
  }
}

export default connect(mapStateToProps, {getBus, showRoutes, GetSchedules}) (Dashboard)