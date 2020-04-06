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
import history from '../utils/history'
import Swal from 'sweetalert2/dist/sweetalert2.js'

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      show : false
    }
    if (!localStorage.getItem('token')) {
      Swal.fire({
        title: 'Sorry!',
        text: 'You must login to access this feature',
        icon: 'warning',
        confirmButtonText: 'Exit'
      })
      history.push('/')
      
    }
  }

  componentDidMount(){
    this.props.getBus()
    this.props.showRoutes()
    this.props.GetSchedules()
  }
  render() {
    return (
      <>
        <BrowserRouter>
        <Container>
          <Row>
            <Col md={2}>
              <span className='logoDashboard' style={{borderBottom: '1px solid #ddd', padding:`20px 0`}}>Dashboard</span>
              <div className="wrap-link">
                <Link to='/dashboard'><p>Schedules</p><AiOutlineSchedule /></Link>
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
                    <Rute component= { Schedules } path='/dashboard' exact />
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