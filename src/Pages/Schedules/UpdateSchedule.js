import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, Modal,Container} from 'reactstrap';
import styled from 'styled-components'

import Schedule from '../../assets/Svg/schedule.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import LoadingScreen from '../../Components/LoadingScreen'
import {MdKeyboardBackspace} from 'react-icons/md'
import {AiOutlineForm} from 'react-icons/ai'
import { Update, GetSchedules } from '../../Redux/actions/Admin/Schedules'
import { getBus } from '../../Redux/actions/Admin/Busses'
import {showRoutes, getRouteForCreate, getRouteByStart} from '../../Redux/actions/Admin/Route'
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
class updateSchedule extends Component {

  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      minDate: new Date(),
      departureDate: new Date()
    }
    this.toggleModal = async () => {
      this.setState({
        modal : !this.state.modal
      })
    }
  }
  onUpdate = (e) => {
    e.preventDefault()
    this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
    const data = {
      date: this.state.departureDate
    }
    this.props.Update(this.props.id, data).then(()=> {
      this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
      history.push('/dashboard')
      this.setState({
        modal: false
      })
    })
  }
  render() {
      return (
        <>
          <span style = {{cursor:'pointer'}} onClick={this.toggleModal}><AiOutlineForm/></span>
    
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
                      <Form method='post' onSubmit={this.onUpdate} >
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

const mapStateToProps = state => {
  return {
    Schedules: state.Schedules,
  }
}
export default connect(mapStateToProps, {Update, GetSchedules}) (updateSchedule)
