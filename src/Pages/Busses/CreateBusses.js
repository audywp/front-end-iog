import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal,Container, Row, Col } from 'reactstrap';
import styled from 'styled-components'
import {MdKeyboardBackspace} from 'react-icons/md'
import { addBus, getBus } from '../../Redux/actions/Admin/Busses'
import {connect} from 'react-redux'
import Bus from '../../assets/Svg/Bus.svg'
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
class CreateBusses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      agent: '',
      nameBus: '',
      busClass: '',
      seat: 0,
      modal: false,
      isLoading: false,
      page: 1
    }



    this.toggleMOdal = () => {
      this.setState({
        modal : !this.state.modal
      })
    }

    this.onHandleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    this.onCreate = async (e) => {
      e.preventDefault()
      const data = {
        name: this.state.agent,
        nameBuss:this.state.nameBus,
        busClass: this.state.busClass,
        busSeat: this.state.seat
      }
      await this.props.getBus()
      await this.props.addBus(data).then(async () => {
        await this.props.getBus()
        this.setState({
          modal: false
        })
      })
    }
    
    this.incrementId1 = () => {
      this.setState({
        id: this.state.id + 1
      })
    }
    this.incrementId2 = () => {
      this.setState({
        id: this.state.id + 2
      })
    }
    this.incrementId3 = () => {
      this.setState({
        id: this.state.id + 3
      })
    }
  }


  render() {
    return (
      <>
      <Button className='createButton' onClick={this.toggleMOdal}>
            <span onClick={this.incrementId2}>ADD</span>
          </Button>
  
          <Modal className='modalLogin' isOpen={this.state.modal} toogle={this.toggleMOdal}>
            <Container>
              <div onClick={this.toggleMOdal} className='backHome'>
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
                    src={Bus} alt=""
                    style={{ width: '60%' }}
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
                        <Label for='name'>Bus Name</Label>
                        <Input
                          onChange={this.onHandleChange}
                          type='text'
                          name='nameBus'
                          id='bus'
                          placeholder='Bus Name'
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
                        <Label for='Class'>Seat</Label>
                        <Input
                          onChange={this.onHandleChange}
                          type='text'
                          name='seat'
                          id='Seat'
                          placeholder='Seat'
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

const mapStateToProps = (state) => {
  return {
    Bus : state.Busses
  }
}

export default connect(mapStateToProps, {addBus, getBus}) (CreateBusses)
