import React, { Component } from 'react'
import '../assets/Styles/Components/Login.scss'
import { Link } from 'react-router-dom'
import loginSvg from '../assets/Svg/login.svg'
import {
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Form,
  Row,
  Col
} from 'reactstrap'
import '../assets/Styles/Pages/Login.scss'
import { MdKeyboardBackspace } from 'react-icons/md'
import { FiUser, FiLock } from 'react-icons/fi'
import { connect } from 'react-redux'
import { setLogin, isLogout } from '../Redux/actions/isLogin'
import history from '../utils/history'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      usernameError: null,
      passwordError: null,
      usernameWrong: true,
      passwordWrong: true,
      inLogin: '',
      isLoading: false,
      disabledButton: true,
      styleDisable: { cursor: 'not-allowed' }
    }
    this.checkUsername = () => {
      const regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/
      if (regex.test(this.state.username)) {
        this.setState({
          usernameError: <span style={{ color: 'white', fontSize: 25 }}><BsCheckCircle /></span>,
          usernameWrong: false
        })
      } else {
        this.setState({
          usernameError: <span style={{ color: 'red', fontSize: 20 }}><AiOutlineCloseCircle /></span>,
          
        })
      }
    }
    this.checkPassword = () => {
      const regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/
      if (regex.test(this.state.username)) {
        this.setState({
          passwordError: <span style={{ color: 'white', fontSize: 25 }}><BsCheckCircle /></span>,
          passwordWrong: false
        })
      } else {
        this.setState({
          passwordError: <span style={{ color: 'red', fontSize: 20 }}><AiOutlineCloseCircle /></span>
        })
      }
    }
    this.handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        disabledButton: false
      })
    }

    this.onLogin = (e) => {
      e.preventDefault()
      const data = {
        username: this.state.username,
        password: this.state.password
      }

      this.props.setLogin(data)
    }
  }

  render () {
    console.log(this.state.usernameError)
    console.log(this.state.disabledButton)
    return (
      <>
        <Container className='login-page'>
          <Row className='login-container'>
            <Col md={6} className='leftContainer'>
              <img className='imageLogin' src={loginSvg} alt='' />
            </Col>
            <Col md={6} className='rightContainer'>
              <Container className='form-login'>
                <Form method='post' onSubmit={this.onLogin}>
                  <FormGroup classname='formInput'>
                    <Label for='username'><FiUser /></Label>
                    <Input
                      onChange={this.handleChange}
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Username'
                      onBlur = {()=> this.checkUsername()}
                    />
                    {this.state.usernameError}
                  </FormGroup>
                  <FormGroup>
                    <Label for='password'><FiLock /></Label>
                    <Input
                      onChange={this.handleChange}
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Password'
                      onBlur = {()=> this.checkPassword()}
                    />
                    {this.state.passwordError}
                  </FormGroup>
                  <div className='submit'>
                    <Link className='forgotpassword' to='/forgotpassword'>Forgot your password ?</Link>
                    <Button disabled={this.state.disabledButton} type='submit' className={this.state.disabledButton ? 'disableButton' : 'buttonLogin'}><span>Login</span></Button>
                  </div>
                </Form>
              </Container>
              <Link className='Register' to='/register/agent'>Become an Agent</Link>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.isLogin
  }
}
const mapDispatchToProps = { setLogin, isLogout }
export default connect(mapStateToProps, mapDispatchToProps)(Login)