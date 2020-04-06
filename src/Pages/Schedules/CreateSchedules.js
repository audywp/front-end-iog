import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, Modal,Container,ButtonDropdown, DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import styled from 'styled-components'
import {MdKeyboardBackspace} from 'react-icons/md'
import { CreateSchedules as addSchedule } from '../../Redux/actions/Admin/Schedules'
import { getBus } from '../../Redux/actions/Admin/Busses'
import {showRoutes} from '../../Redux/actions/Admin/Route'
import {connect} from 'react-redux'
import '../../assets/Styles/Pages/Schedules.scss'
import { Link } from 'react-router-dom';
const UpdateBus = styled(Form) `
  display: flex;
  justify-content: center;
  algin-items: center;
  max-width : 100%;
  margin-top: 30px;
  color: #ddd;
  font-size: 22px;
  & .form-group {
    width: 450px !important;
    margin-bottom: 10px;
  }
  & .buttonUpdate {
    position: absolute;
    margin-top: 10px;
    background: linear-gradient(to top right, #74b9ff, #0984e3);
    border: none;
    outline: none;
    box-shadow: none;
  }
`
class CreateSchedules extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idBus: 0,
      idRoute: 0,
      price: 0,
      departureTime: '21:21:21',
      arriveTime: '20:20:20',
      departureDate: '01-01-1999',
      modal: false,
      isLoading: false,
      isOpenDropdwon1: false,
      isOpenDropdwon2: false
    }



    this.toggleDropdown1 = () => {
      this.setState({
        isOpenDropdwon1 : !this.state.isOpenDropdwon1
      })
    }

    this.toggleDropdown2 = () => {
      this.setState({
        isOpenDropdwon2 : !this.state.isOpenDropdwon2
      })
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
      const data = {
        price: this.state.price,
        departureTime: this.state.departureTime,
        arriveTime: this.state.arriveTime,
        departureDate: this.state.departureDate,
      }
      console.log(data)
      
      console.log(this.state.id)
      this.props.addSchedule(this.state.idBus, this.state.idRoute, data)
    }
  }
  componentDidMount() {
    this.props.getBus()
    this.props.showRoutes()
  }

  render() {
    return (
      <>
        
       
        <Button onClick={this.toggleModal}>
          <span>ADD</span>
        </Button>
      
      <Modal className='modalLogin' isOpen = {this.state.modal} toogle={this.toggleModal}>
        <Container>
          <div onClick={this.toggleModal} className="backHome">
            <MdKeyboardBackspace/><span>Back to home</span>
          </div>
          <UpdateBus className='form-updateBusess'>
          <Form method='post' className='CreateSchedules' onSubmit= {this.onCreate}>
          <ButtonDropdown caret isOpen={this.state.isOpenDropdwon1} toggle={this.toggleDropdown1}>
          <DropdownToggle caret className='createButton'>
            Choose Bus
          </DropdownToggle>
          <DropdownMenu className>
            {this.props.Bus.data.data && this.props.Bus.data.data.map((bus, i) => {
              return (
                <div key = { i }>
                  <DropdownItem style = {{cursor:'pointer'}}> <span onClick={()=> this.setIdbus(bus.id)}>{bus.id} - {bus.car_name} </span> </DropdownItem>
                </div>
              )
            })}
          
          </DropdownMenu>
        </ButtonDropdown>

        <ButtonDropdown caret isOpen={this.state.isOpenDropdwon2} toggle={this.toggleDropdown2}>
          <DropdownToggle caret className='createButton'>
            Choose Route
          </DropdownToggle>
          <DropdownMenu>
            {this.props.Route.data.data && this.props.Route.data.data.map((route, i) => {
              return (
                <div key = { i }>
                  <DropdownItem style = {{cursor:'pointer'}} onClick={this.toggleMOdal}> <span onClick={()=> this.setRoute(route.id)}>{route.start} - {route.end} </span> </DropdownItem>
                </div>
              )
            })}
          
          </DropdownMenu>
        </ButtonDropdown>

        <Row>
          <Col md={6}>
          <FormGroup>
              <Label for='idBus'>Bus</Label>
              
              <Input
                disabled
                type = 'text'
                name = 'idBus'
                id = 'idBus'
                value = {this.state.idBus}
                placeholder = 'Bus'
              /> 
              
            </FormGroup>
           
            <FormGroup>
              <Label for='idRoute'>Route</Label>
              <Input
                disabled
                type = 'text'
                name = 'idRoute'
                id = 'idRoute'
                value = { this.state.idRoute }
                placeholder = 'Route'
              />
            </FormGroup>

            <FormGroup>
              <Label for='price'>Price</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'text'
                name = 'price'
                id = 'price'
                placeholder = 'Price'
              />
            </FormGroup>

          </Col>

          <Col md={6}>
          <FormGroup>
              <Label for='departureTime'>Departure Time</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'time'
                name = 'departureTime'
                id = 'departureTime'
                placeholder = 'Departure Time'
              />
            </FormGroup>

            <FormGroup>
              <Label for='arriveTime'>Arrive Time</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'time'
                name = 'arriveTime'
                id = 'arriveTime'
                placeholder = 'Arrive Time'
              />
            </FormGroup>

            <FormGroup>
              <Label for='departureDate'>Departure Date</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'date'
                name = 'departureDate'
                id = 'departureDate'
                placeholder = 'Departure Date'
              />
            </FormGroup>
          </Col>
        </Row>
            
            
            
            <Button type='submit' className='buttonUpdate'>Submit</Button>
            </Form>
          </UpdateBus>
          
        </Container>
      </Modal>
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Schedules: state.Schedules,
    Bus: state.Busses,
    Route: state.Routes
  }
}

export default connect(mapStateToProps, {addSchedule, getBus, showRoutes}) (CreateSchedules)
