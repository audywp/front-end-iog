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
class BeAgent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      inLogin: '',
      isLoading: false
    }
    this.handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
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
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='password'><FiLock /></Label>
                    <Input
                      onChange={this.handleChange}
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Password'
                    />
                  </FormGroup>
                  <div className='submit'>
                    <Link className='forgotpassword' to='/forgotpassword'>Forgot your password ?</Link>
                    <Button type='submit' className='buttonLogin'><span>Login</span></Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(BeAgent)