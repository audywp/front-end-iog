import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, Container } from 'reactstrap'
import styled from 'styled-components'
import { MdKeyboardBackspace } from 'react-icons/md'
import { CreateRoutes as addRoute } from '../../Redux/actions/Admin/Route'
import { connect } from 'react-redux'
const UpdateBus = styled(Form)`
  display: block;
  display: flex;
  justify-content: center;
  algin-items: center;
  max-width : 100%;
  margin-top: 120px;
  color: #ddd;
  font-size: 22px;
  & .form-group {
    width: 450px !important;
    margin-bottom: 10px;
  }
  & .buttonUpdate {
    position: absolute;
    margin-top: 10px;
    background: linear-gradient(to top right, #74b9ff, #0984e3);
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
      isOpenDropdwon: false
    }

    this.toggleDropdown = () => {
      this.setState({
        isOpenDropdwon: !this.state.isOpenDropdwon
      })
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
      console.log(data)

      console.log(this.state.id)
      this.props.addRoute(this.state.id, data)
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
    return (
      <>
        <Button onClick={this.toggleMOdal}>
          <span onClick={this.incrementId2}>ADD</span>
        </Button>

        <Modal className='modalLogin' isOpen={this.state.modal} toogle={this.toggleMOdal}>
          <Container>
            <div onClick={this.toggleMOdal} className='backHome'>
              <MdKeyboardBackspace /><span>Back to home</span>
            </div>
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

          </Container>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Route: state.Routes
  }
}

export default connect(mapStateToProps, { addRoute })(CreateRoutes)
