import React, { useState } from 'react'
import { Modal, Button, Container, FormGroup, Input, Label} from 'reactstrap'
import '../assets/Styles/Pages/Login.scss'
import {MdKeyboardBackspace} from 'react-icons/md'
import { FiUser, FiLock } from 'react-icons/fi'
import {Link} from 'react-router-dom'

const Login = (props) => {
  
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <>
      <span style = {{cursor:'pointer'}} onClick={toggle}>Login</span>
      <Modal className='modalLogin' isOpen = {modal} toogle={toggle}>
        <Container>
          <div onClick={toggle} className="backHome">
            <MdKeyboardBackspace/><span>Back to home</span>
          </div>
          <Container className='form-login'>

            <FormGroup>
              <Label for='username'><FiUser /></Label>
              <Input 
                type = 'text'
                name = 'username'
                id = 'username'
                placeholder = 'Username'
              />
            </FormGroup>
            <FormGroup>
              <Label for='password'><FiLock /></Label>
              <Input 
                type = 'text'
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
            <Button className='buttonLogin'>Login</Button>
          </Container>
          <Link className='forgotpassword' to='/forgotpassword'>Forgot your password ?</Link>
        </Container>
      </Modal>
    </>
  )
}

export default Login