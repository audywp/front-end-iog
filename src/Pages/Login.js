import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, FormGroup, Input, Label,Form} from 'reactstrap'
import '../assets/Styles/Pages/Login.scss'
import {MdKeyboardBackspace} from 'react-icons/md'
import { FiUser, FiLock } from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import setLogin from '../Redux/actions/isLogin'

const Login = (props) => {
  
  const [modal, setModal] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const toggle = () => setModal(!modal)

  const submitUsername = (e) => {
    setUsername({
      username: e.target.value
    })
  }
  const submitPassword = (e) => {
    setPassword({
      password: e.target.value
    })
  }
  
  const onLogin = (e) => {
    e.preventDefault()
    this.props.setLogin(username, password)
  }
  

  return (
    <>
      <span style = {{cursor:'pointer'}} onClick={toggle}>Login</span>
      <Modal className='modalLogin' isOpen = {modal} toogle={toggle}>
        <Container>
          <div onClick={toggle} className="backHome">
            <MdKeyboardBackspace/><span>Back to home</span>
          </div>
          <Container className='form-login'>
          <Form method='post' onSubmit = {onLogin}>
            <FormGroup>
              <Label for='username'><FiUser /></Label>
              <Input 
                onChange = {submitUsername}
                type = 'text'
                name = 'username'
                id = 'username'
                placeholder = 'Username'
              />
            </FormGroup>
            <FormGroup>
              <Label for='password'><FiLock /></Label>
              <Input 
                onChange = {submitPassword}
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
            <Button type='submit' className='buttonLogin'>Login</Button>
            </Form>
          </Container>
          <Link className='forgotpassword' to='/forgotpassword'>Forgot your password ?</Link>
        </Container>
      </Modal>
      {console.log({username}, {password})}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.isLogin
  }
}
const mapDispatchToProps = {setLogin}
export default connect(mapStateToProps, mapDispatchToProps)(Login)