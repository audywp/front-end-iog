import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal,Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components'
import {MdKeyboardBackspace} from 'react-icons/md'
import { addBus } from '../../Redux/actions/Admin/Busses'
import {connect} from 'react-redux'
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
class CreateBusses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      nameBus: '',
      busClass: '',
      seat: 0,
      modal: false,
      isLoading: false,
      isOpenDropdwon: false
    }



    this.toggleDropdown = () => {
      this.setState({
        isOpenDropdwon : !this.state.isOpenDropdwon
      })
    }
    this.toggleMOdal = () => {
      this.setState({
        modal : !this.state.modal
      })
    }

    this.onHandleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    this.onCreate = (e) => {
      e.preventDefault()
      const data = {
        nameBuss:this.state.nameBus,
        busClass: this.state.busClass,
        busSeat: this.state.seat
      }
      console.log(data)
      
      console.log(this.state.id)
      this.props.addBus(this.state.id, data)
    }
    
    this.incrementId1 = () => {
      this.setState({
        id: this.state.id + 1
      })
    }
    this.incrementId2 = () => {
      this.setState({
        id: this.state.id + 2
      })
    }
    this.incrementId3 = () => {
      this.setState({
        id: this.state.id + 3
      })
    }
  }


  render() {
    return (
      <>
      <ButtonDropdown isOpen={this.state.isOpenDropdwon} toggle={this.toggleDropdown}>
        <DropdownToggle>
          ADD
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem style = {{cursor:'pointer'}} onClick={this.toggleMOdal}><span onClick={this.incrementId1}>Agen 1</span></DropdownItem>
          <DropdownItem style = {{cursor:'pointer'}} onClick={this.toggleMOdal}><span onClick={this.incrementId2}>Agen 2</span></DropdownItem>
          <DropdownItem style = {{cursor:'pointer'}} onClick={this.toggleMOdal}> <span onClick={this.incrementId3}>Agen 3</span> </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
     
      
      <Modal className='modalLogin' isOpen = {this.state.modal} toogle={this.toggleMOdal}>
        <Container>
          <div onClick={this.toggleMOdal} className="backHome">
            <MdKeyboardBackspace/><span>Back to home</span>
          </div>
          <UpdateBus className='form-updateBusess'>
          <Form method='post' onSubmit= {this.onCreate}>
            <FormGroup>
              <Label for='name'>Bus Name</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'text'
                name = 'nameBus'
                id = 'name'
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
                placeholder = 'Class'
              />
            </FormGroup>
            <FormGroup>
              <Label for='Seat'>Seat</Label>
              <Input
                onChange = {this.onHandleChange}
                type = 'text'
                name = 'seat'
                id = 'Seat'
                placeholder = 'Seat'
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
    Bus : state.Busses
  }
}

export default connect(mapStateToProps, {addBus}) (CreateBusses)
