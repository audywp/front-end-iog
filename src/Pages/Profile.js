import React, { Component } from 'react'
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';

import ImagePicker from 'react-image-picker'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Update, GetUpdate } from '../Redux/actions/Update'
import 'react-image-picker/dist/index.css'
import '../assets/Styles/Pages/Profile.scss'
import styled from 'styled-components'
import {MdKeyboardBackspace} from 'react-icons/md'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import history from '../utils/history'
import config from '../utils/Config'
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
      name: this.props.Profile.data.detail && this.props.Profile.data.detail.name,
      email: this.props.Profile.data.detail && this.props.Profile.data.detail.email,
      Phone: this.props.Profile.data.detail && this.props.Profile.data.detail.phone,
      modal: false,
      dataProf:[],
      picture:this.props.Profile.data.user && this.props.Profile.data.user.picture,
      previewImage: config.APP_BACKEND.concat(`file/${this.props.Profile.data.user && this.props.Profile.data.user.picture}`) || ''
    }
    this.toggleModal = async () => {
      this.setState({
        modal : !this.state.modal
      })
    }
    this.onHandleChange = (e) => {
      e.preventDefault()
      this.setState({
        [e.target.name] : e.target.value
      })
    }
  }
  onUpdate = async (e) => {
    e.preventDefault()
    const id = localStorage.getItem('id')
    // const data = {
    //   picture: this.state.picture,
    //   name: this.state.name,
    //   email: this.state.email,
    //   phone: this.state.Phone
    // }
    let dataFo = new FormData()
    dataFo.append('picture', this.state.picture)
    dataFo.append('name', this.state.name)
    dataFo.append('email', this.state.email)
    dataFo.append('phone', this.state.Phone)
    console.log('form data', dataFo, this.state.email)
    await this.props.Update(id, dataFo).then(() => {
      this.setState({
        modal: false
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Update successfully'
      })
    })
  }

  async componentDidMount(){
    const id = localStorage.getItem('id')
    const data = {
      username: this.props.login.userInfo.data.username
    }
    console.log('asdsadwasd', data.username)
    await this.props.GetUpdate(id)
  }
  render() {
    console.log(this.state)
    console.log(this.state.previewImage)
      return (
        <>
          <span style = {{cursor:'pointer'}} onClick={this.toggleModal}>Profile</span>
    
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
                    <div className= 'cardProfile'>
                      <Card className= 'cardContainerProfile'>
                        <CardImg top center src={this.state.previewImage} alt="Card image cap" />
                        <Form style={{
                          marginTop: 20
                        }}>
                          <Input
                            style={{
                              color: 'white'
                            }} 
                            type='file'
                            name='file'
                            id='profile'
                            onChange={(e)=> this.setState({
                              picture: e.target.files[0],
                              previewImage: URL.createObjectURL(e.target.files[0])
                            })}
                          />
                        </Form>
                        <CardBody className='cardProfileBody'>
                          <CardTitle>Balance : {this.props.Profile.data.detail && this.props.Profile.data.detail.balance} </CardTitle>
                          {/* <Button>Button</Button> */}
                        </CardBody>
                      </Card>
                    </div>

                  </Col>
                  <Col md={6}>
                    <UpdateBus className='form-updateBusess'>
                      <Form method='post' onSubmit={this.onUpdate}>
                        <FormGroup>
                          <Label for='name'>Full Name</Label>
                          <Input
                            onChange={this.onHandleChange}
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Name'
                            value={this.state.name}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for='email'>Email</Label>
                          <Input
                            onChange={this.onHandleChange}
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={this.state.email}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for='Phone'>Phone</Label>
                          <Input
                            onChange={this.onHandleChange}
                            type='number'
                            maxLength={12}
                            name='Phone'
                            id='Phone'
                            placeholder='Phone'
                            value={this.state.Phone}
                          />
                        </FormGroup>
                        <Button type='submit' className='buttonUpdate'>Update</Button>
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
    Profile: state.UpdateProfile,
    login: state.isLogin
  }
}
export default connect(mapStateToProps, { Update, GetUpdate }) (updateSchedule)
