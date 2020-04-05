import React, { Component } from 'react'
import { Table, Input, Form, FormGroup,Label, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import styled from 'styled-components'
import { AiOutlineDelete } from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import { getBus, updateBus,deleteBus } from '../../Redux/actions/Admin/Busses'
import {connect} from 'react-redux'
import CreateBusses from './CreateBusses' 
import EditBusses from './EditBusses'

const TableData = styled(Table)`
  color: #ddd
`
class Busses extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    this.props.getBus()
    this.props.deleteBus(this.props.id)
  }

  updateData = (id, data) => {
    this.props.updateBus(id, data)
    this.props.getBus()
    alert('ok')
  }

  render() {
    return (
      <>

        <div className="utils">
          <Form>
            <FormGroup>
              <Label for='search'>
                <FaSearch/>
              </Label>
              <Input
                id='search'
                type= 'text'
                name= 'search'
                placeholder= 'search'
              />
            </FormGroup>
          </Form>
          <CreateBusses />
        </div>
        <TableData responsive bordered>
          <thead>
            <tr>
              <th class="text-center">No</th>
              <th>Name</th>
              <th>Class</th>
              <th class="text-center">Seat</th>
              <th className= 'table-options text-center' >Options</th>
            </tr>  
          </thead>

            <tbody>
        { this.props.Bus.data.data && this.props.Bus.data.data.map((v,i)=>{
            return (
              <tr>
                <th class="text-center" scope='row' key = { i }>{ i + 1} </th>
                <td>{v.car_name}</td>
                <td>{v.bus_class}</td>
                <td class="text-center">{v.bus_seat}</td>
                <td class="text-center iconData">
                  <span><EditBusses updateData={this.updateData} match='update' id={`${v.id}`} /></span>
                  <span onClick={()=> this.props.deleteBus(v.id)}> <AiOutlineDelete /> </span>
                </td>
              </tr>
            )
          })
        }
            </tbody>
            
        </TableData>
        <Container className='pagination-bus'>
          <Pagination size="lg" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Bus : state.Busses
  }
}
const mapDispatchToProps = {getBus, updateBus, deleteBus}
export default connect(mapStateToProps, mapDispatchToProps)(Busses)
