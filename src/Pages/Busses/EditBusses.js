import React, { Component } from 'react'
import { Modal, Button, Container, FormGroup, Input, Label,Form} from 'reactstrap'
import {MdKeyboardBackspace} from 'react-icons/md'
import {AiOutlineForm} from 'react-icons/ai'
import {updateBus} from '../../Redux/actions/Admin/Busses'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import history from '../../utils/history'

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

class EditBusses extends Component {

  constructor(props) {
    super (props)
    this.state= {
      id: 0,
      nameBus: '',
      busClass: '',
      seat: 0,
      modal: false,
      isLoading: false,
    }

    this.toggle = (e) => {
      this.setState({
        modal: !this.state.modal
      })
    }
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onUpdate = (e) => {
    e.preventDefault()
    const data = {
      nameCar:this.state.nameBus,
      busClass: this.state.busClass,
      seat: this.state.seat
    }
    console.log(data)
    this.props.updateData(this.props.id, data)
    
  }


  render() {
    return (
      <>
        
      <span style = {{cursor:'pointer'}} onClick={this.toggle}><AiOutlineForm/></span>
      <Modal className='modalLogin' isOpen = {this.state.modal} toogle={this.toggle}>
        <Container>
          <div onClick={this.toggle} className="backHome">
            <MdKeyboardBackspace/><span>Back to home</span>
          </div>
          <UpdateBus className='form-updateBusess'>
          <Form method='post' onSubmit= {this.onUpdate}>
            <FormGroup>
              <Label for='name'>Bus Name</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'text'
                name = 'nameBus'
                id = 'name'
                value = {this.state.nameBus}
                placeholder = 'Name'
              />
            </FormGroup>
            <FormGroup>
              <Label for='Class'>Class</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'text'
                name = 'busClass'
                id = 'Class'
                value = {this.state.busClass}
                placeholder = 'Class'
              />
            </FormGroup>
            <FormGroup>
              <Label for='Seat'>Seat</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'text'
                name = 'seat'
                value = {this.state.seat}
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

const mapStateToProps = (state) => {
  return {
    Bus : state.Busses
  }
}

export default connect(mapStateToProps, {updateBus}) (EditBusses)
