import React, { Component } from 'react'
import { Modal, Button, Container, FormGroup, Input, Label,Form} from 'reactstrap'
import {MdKeyboardBackspace} from 'react-icons/md'

import styled from 'styled-components'

const UpdateBus = styled(Form) `
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

export default class EditBusses extends Component {

  constructor(props) {
    super (props)
    this.state= {
      nameBus: '',
      busClass: '',
      seat: 0,
      modal: false
    }

    this.toggle = (e) => {
      this.setState({
        modal: !this.state.modal
      })
    }
  }

  render() {
    return (
      <>
        
      <span style = {{cursor:'pointer'}} onClick={this.toggle}>Login</span>
      <Modal className='modalLogin' isOpen = {this.state.modal} toogle={this.toggle}>
        <Container>
          <div onClick={this.toggle} className="backHome">
            <MdKeyboardBackspace/><span>Back to home</span>
          </div>
          <UpdateBus className='form-updateBusess'>
          <Form method='post'>
            <FormGroup>
              <Label for='name'>Bus Name</Label>
              <Input 
                type = 'text'
                name = 'name'
                id = 'name'
                placeholder = 'Name'
              />
            </FormGroup>
            <FormGroup>
              <Label for='Class'>Class</Label>
              <Input
                type = 'text'
                name = 'Class'
                id = 'Class'
                placeholder = 'Class'
              />
            </FormGroup>
            <FormGroup>
              <Label for='Seat'>Seat</Label>
              <Input
                type = 'text'
                name = 'Seat'
                id = 'Seat'
                placeholder = 'Seat'
              />
            </FormGroup>
            
            <Button type='submit' className='buttonUpdate'>Update</Button>
            </Form>
          </UpdateBus>
          
        </Container>
      </Modal>
    </>

    )
  }
}
