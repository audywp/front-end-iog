import React, { Component } from 'react'
import { Table, Input, Form, FormGroup,Label, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import {connect} from 'react-redux'
import {AiOutlineDelete, AiOutlineForm} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import CreateSchedules from './CreateSchedules'
// import EditRoutes from './EditRoutes'
import {GetSchedules, DeleteSchedules} from '../../Redux/actions/Admin/Schedules'
import styled from 'styled-components'

const TableSchedules = styled(Table)`
  color: #ddd;
`
class Schedules extends Component {

  constructor(props) {
    super(props)
    this.state = {
      idRoute : 0,
      idBus : 0,
      currentPage:1
    }

    this.nextPage = (e) => {
      e.preventDefault()
      this.setState({
        currentPage: this.state.currentPage + 1
      })
      this.props.GetSchedules(this.state.currentPage)
    }
  
    this.prevPage = (e) => {
      e.preventDefault()
      this.setState({
        currentPage: this.state.currentPage - 1
      })
      this.props.GetSchedules(this.state.currentPage)
    }

    this.setPage = (e) => {
      e.preventDefault()
      this.props.GetSchedules(e.target.textContent)
      console.log(e.target.textContent)
    }
  }
  
  componentDidMount() {
    this.props.GetSchedules()
    console.log(this.props.id)
  }
  render() {
    const page = []
    const totalPage = this.props.Schedules.data.pageInfo && this.props.Schedules.data.pageInfo.totalPage
    for (let index = 0; index < totalPage; index++) {
        page.push(<PaginationItem key={index}> <PaginationLink onClick={this.setPage} href='#'>{index + 1}</PaginationLink> </PaginationItem>)
      }
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
          <CreateSchedules/>
        </div>
        <TableSchedules responsive bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Bus Name</th>
              <th>Bus Seat</th>
              <th>Start</th>
              <th>End</th>
              <th>Price</th>
              <th>Time</th>
              <th className= 'table-options'>Options</th>
            </tr>  
          </thead>

            <tbody>
        { this.props.Schedules.data.result && this.props.Schedules.data.result.map((v,i)=>{
            return (
              <tr>
                <th scope='row' key = { i }>{ i + 1} </th>
                <td>{v.car_name}</td>
                <td>{v.bus_seat}</td>
                <td>{v.start}</td>
                <td>{v.end}</td>
                <td>{v.price}</td>
                <td>{v.departure_time}</td>
                <td className='iconData'>
                  <span><AiOutlineForm/></span>
                  <span onClick={()=> this.props.DeleteSchedules(v.id)}> <AiOutlineDelete /> </span>
                </td>
              </tr>
            )
          })
        }
            </tbody>
        </TableSchedules>
        <Container className='pagination-bus'>
          <Pagination size="lg" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink onClick={this.prevPage} previous />
            </PaginationItem>
              {page}
            <PaginationItem>
              <PaginationLink onClick={this.nextPage} next/>
            </PaginationItem>
          </Pagination>
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Schedules: state.Schedules,

  }
}
const mapDispatchToProps = {GetSchedules,DeleteSchedules}
export default connect(mapStateToProps, mapDispatchToProps) (Schedules)