import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, Modal,Container,ButtonDropdown, DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import styled from 'styled-components'

import Schedule from '../../assets/Svg/schedule.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import LoadingScreen from '../../Components/LoadingScreen'
import {MdKeyboardBackspace} from 'react-icons/md'
import { CreateSchedules as addSchedule, GetSchedules, schedulesLoading } from '../../Redux/actions/Admin/Schedules'
import { getBus } from '../../Redux/actions/Admin/Busses'
import {showRoutes} from '../../Redux/actions/Admin/Route'
import {connect} from 'react-redux'
import '../../assets/Styles/Pages/Schedules.scss'
import '../../assets/Styles/Pages/Statis.scss'
import { Link } from 'react-router-dom';
import history from '../../utils/history'
const UpdateBus = styled(Form) `
display: flex;
justify-content: center;
algin-items: center;
max-width : 100%;
color: #ddd;
font-size: 22px;
margin-bottom: 20px;
& .form-group {
  width: 380px !important;
}
& .buttonUpdate {
  position: absolute;
  margin-top: 10px;
  background: linear-gradient(to top right, #1c8be0,#1c8be0,#3F3D56,#1c8be0, #1c8be0);
  border: none;
  outline: none;
  box-shadow: none;
}
`
class CreateSchedules extends Component {

  constructor(props) {
    super(props)

    this.state = {
      agent: '',
      start: '',
      end: '',
      busClass: '',
      price: 0,
      departureTime: new Date().getTime(),
      arriveTime: null,
      departureDate: new Date(),
      modal: false,
      isLoading: false,
      minDate: new Date()
    }
    this.toggleModal = () => {
      this.setState({
        modal : !this.state.modal
      })
    }

    this.onHandleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
    this.setIdbus = (idBus) => {
      this.setState({
        idBus: idBus
      })
      console.log(idBus)
    }

    this.setRoute = (idRoute) => {
      this.setState({
        idRoute: idRoute
      })
      console.log(idRoute)
    }

    this.onCreate = (e) => {
      e.preventDefault()
      const departTime = `${this.state.departureTime}`
      const arriveTime = `${this.state.arriveTime}`
      const data = {
        nameAgent: this.state.agent,
        start: this.state.start,
        end: this.state.end,
        classBus: this.state.busClass,
        price: this.state.price,
        departureTime: departTime.slice(16, 24),
        arriveTime: arriveTime.slice(16, 24),
        departureDate: this.state.departureDate,
      }
      this.props.GetSchedules()
      this.props.addSchedule(data).then(() => {
        if (this.props.Schedules.isLoading) {
          this.props.GetSchedules()
          this.setState({
            modal: false
          })
        }
      })
    }
  }
  render() {

    if (!this.props.Schedules.isLoading) {
      return(
        <Container>
          <LoadingScreen/>
        </Container>
      )   
    } else {

      return (
        <>
          <Button className='createButton' onClick={this.toggleModal}>
              <span onClick={this.incrementId2}>ADD</span>
            </Button>
    
            <Modal className='modalLogin' isOpen={this.state.modal} toogle={this.toggleModal}>
              <Container>
                <div onClick={this.toggleModal} className='backHome'>
                  <MdKeyboardBackspace /><span>Back to Dashboard</span>
                </div>
    
                <Row
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Col md={6}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={Schedule} alt=""
                      style={{ width: '80%' }}
                    />
                  </Col>
                  <Col md={6}>
                    <UpdateBus className='form-updateBusess'>
                      <Form method='post' onSubmit={this.onCreate}>
                        <FormGroup>
                          <Label for='Class'>Agent</Label>
                          <Input
                            onChange={this.onHandleChange}
                            type='text'
                            name='agent'
                            id='Agent'
                            placeholder='Agent Name'
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for='name'>Start Place</Label>
                          <Input
                            onChange={this.onHandleChange}
                            type='text'
                            name='start'
                            id='Start'
                            placeholder='Start Place'
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for='name'>End Place</Label>
                          <Input
                            onChange={this.onHandleChange}
                            type='text'
                            name='end'
                            id='End'
                            placeholder='End Place'
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for='Class'>Class</Label>
                          <Input
                            onChange={this.onHandleChange}
                            type='text'
                            name='busClass'
                            id='Class'
                            placeholder='Class'
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for='Class'>Price</Label>
                          <Input
                            onChange={this.onHandleChange}
                            type='text'
                            name='price'
                            id='Price'
                            placeholder='Price'
                          />
                        </FormGroup>
                        <div className='timeContainer'>
                          <FormGroup id='departure' className='departureTime'>
                            <Label>Departure Time</Label>
                            <DatePicker
                              className='DatePicker'
                              selected={this.state.departureTime}
                              dateFormat='hh:mm'
                              timeIntervals={60}
                              timeFormat='hh:mm'
                              locale='id'
                              timeInputLabel
                              onChange={date => this.setState({departureTime: date})}
                              showTimeSelect
                              showTimeSelectOnly
                              fixedHeight
                              isClearable
                            />
                          </FormGroup>
                          <FormGroup id='arrive' className='departureTime'>
                            <Label>Arrive Time</Label>
                            <DatePicker
                              className='DatePicker'
                              selected={this.state.arriveTime}
                              dateFormat='hh:mm'
                              timeIntervals={60}
                              timeFormat='hh:mm'
                              timeInputLabel
                              onChange={date=> this.setState({arriveTime: date})}
                              showTimeSelect
                              showTimeSelectOnly
                              fixedHeight
                              isClearable
                            />
                          </FormGroup>
                        </div>
                        <FormGroup className='departureTime'>
                          <Label>Departure Date</Label>
                          <DatePicker
                            className='DatePicker'
                            placeholderText= 'Select Departure Date'
                            selected={this.state.departureDate}
                            locale='ID'
                            dateFormat='yyyy-MM-dd'
                            adjustDateOnChange
                            name='departureDate'
                            onChange={date => this.setState({ departureDate: date })}
                            minDate={this.state.minDate}
                            fixedHeight
                            isClearable
                          />
                        </FormGroup>
                        <Button type='submit' className='buttonUpdate'>Submit</Button>
                      </Form>
                    </UpdateBus>
                  </Col>
                </Row>
    
              </Container>
            </Modal>
      </>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    Schedules: state.Schedules,
    Bus: state.Busses,
    Route: state.Routes
  }
}

export default connect(mapStateToProps, {addSchedule,schedulesLoading, GetSchedules, getBus, showRoutes}) (CreateSchedules)
