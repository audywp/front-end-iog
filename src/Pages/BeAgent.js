import React, { Component } from 'react'
import '../assets/Styles/Components/Login.scss'
import { Link } from 'react-router-dom'
import Register from '../assets/Svg/register.svg'
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
import { ChangeUserToAgent } from '../Redux/actions/Admin/Agent'
import history from '../utils/history'
class BeAgent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Name: '',
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
        username: this.state.Name,
      }

      this.props.ChangeUserToAgent(data)
    }
  }

  render () {
    return (
      <>
        <Container className='login-page'>
          <Row className='login-container'>
            <Col md={6} className='leftContainer'>
              <img className='imageLogin' src={Register} alt='' />
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
                      placeholder='Name'
                    />
                  </FormGroup>
                  <div className='submit'>
                    <span></span>
                    <Button type='submit' className='buttonLogin'><span>Be Agent</span></Button>
                  </div>
                </Form>
              </Container>
              <Link className='Register' to='/'>Back to login</Link>
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
const mapDispatchToProps = { ChangeUserToAgent }
export default connect(mapStateToProps, mapDispatchToProps)(BeAgent)