import React, { Component } from 'react'
import { Modal, Button, Container, FormGroup, Input, Label,Form} from 'reactstrap'
import '../assets/Styles/Pages/Login.scss'
import {MdKeyboardBackspace} from 'react-icons/md'
import { FiUser, FiLock } from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {setLogin} from '../Redux/actions/isLogin'


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : '',
      modal: false,
      toggle: false,
    }

    this.openModal = (e) => {
      this.setState({
        modal:this.state.modal
      })
    }

    this.toggle = () => {
      this.setState({
        modal: !this.state.modal
      })
    }

    this.handleChange = (e) =>{
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    this.onLogin = (e) => {
      e.preventDefault()
      const data = {
        username: this.state.username,
        password: this.state.password
      }

      this.props.setLogin(data)
      console.log(this.props.data.isLogged)
      // console.log(this.props.Login)

    }
  }

  render(){
    return(
      <>
      <span style = {{cursor:'pointer'}} onClick={this.toggle}>Login</span>
      <Modal className='modalLogin' isOpen = {this.state.modal}>
        <Container>
          <div onClick={this.toggle} className="backHome">
            <MdKeyboardBackspace/><span>Back to home</span>
          </div>
          <Container className='form-login'>
          <Form method='post' onSubmit = {this.onLogin}>
            <FormGroup>
              <Label for='username'><FiUser /></Label>
              <Input 
                onChange = {this.handleChange}
                type = 'text'
                name = 'username'
                id = 'username'
                placeholder = 'Username'
              />
            </FormGroup>
            <FormGroup>
              <Label for='password'><FiLock /></Label>
              <Input 
                onChange = {this.handleChange}
                type = 'password'
                name = 'password'
                id = 'password'
                placeholder = 'Password'
              />
            </FormGroup>
            <FormGroup className='checkBox' check>
              <Label check>
                <Input type="checkbox" /> Remember Me!
              </Label>
            </FormGroup>
            <Button onClick={this.toggle} type='submit' className='buttonLogin'>Login</Button>
            </Form>
          </Container>
          <Link className='forgotpassword' to='/forgotpassword'>Forgot your password ?</Link>
        </Container>
      </Modal>
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.isLogin 
  }
}
const mapDispatchToProps = {setLogin}
export default connect(mapStateToProps, mapDispatchToProps)(Login)