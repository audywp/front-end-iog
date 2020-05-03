import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, Container, Col,Row } from 'reactstrap'
import styled from 'styled-components'
import { MdKeyboardBackspace } from 'react-icons/md'
import { CreateRoutes as addRoute, routesLoading, showRoutes } from '../../Redux/actions/Admin/Route'
import Rute from '../../assets/Svg/rute.svg'
import { connect } from 'react-redux'
import history from '../../utils/history'
import LoadingScreen from '../../Components/LoadingScreen'
import '../../assets/Styles/Pages/Statis.scss'
const UpdateBus = styled(Form)`
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
class CreateRoutes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: 2,
      start: '',
      end: '',
      modal: false,
      isLoading: false,
    }

    this.toggleMOdal = () => {
      this.setState({
        modal: !this.state.modal
      })
    }

    this.onHandleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    this.onCreate = (e) => {
      e.preventDefault()
      const data = {
        start: this.state.start,
        end: this.state.end
      }
      this.props.showRoutes()
      this.props.addRoute(this.state.id, data).then(()=> {
        if (this.props.Route.isLoading) {
          this.props.showRoutes()
          history.push('/dashboard/routes')
        }
      })
    }

    this.incrementId1 = () => {
      this.setState({
        id: this.state.id + 1
      })
    }
    this.incrementId2 = () => {
      this.setState({
        id: 2
      })
    }
    this.incrementId3 = () => {
      this.setState({
        id: this.state.id + 3
      })
    }
  }

  render () {
    if (!this.props.Route.isLoading) {
      return(
        <Container>
          <LoadingScreen/>
        </Container>
      )   
    } else {
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
                    src={Rute} alt=""
                    style={{ width: '60%' }}
                  />
                </Col>
                <Col md={6}>
                  <UpdateBus className='form-updateBusess'>
                    <Form method='post' onSubmit={this.onCreate}>
                      <FormGroup>
                        <Label for='name'>Start From</Label>
                        <Input
                          onChange={this.onHandleChange}
                          type='text'
                          name='start'
                          id='Start'
                          placeholder='Start'
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for='Class'>Destination</Label>
                        <Input
                          onChange={this.onHandleChange}
                          type='text'
                          name='end'
                          id='Destination'
                          placeholder='Destination'
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
    Route: state.Routes
  }
}

export default connect(mapStateToProps, { addRoute, routesLoading, showRoutes })(CreateRoutes)
