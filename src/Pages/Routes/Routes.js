import React, { Component } from 'react'
import { Table, Input, Form, FormGroup,Label, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import {connect} from 'react-redux'
import {AiOutlineDelete} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import CreateRoutes from './CreateRoutes'
import EditRoutes from './EditRoutes'
import {showRoutes, deleteRoutes} from '../../Redux/actions/Admin/Route'
import styled from 'styled-components'
import GetIdRoutes from '../Schedules/GetIdRoutes'

const TableSchedules = styled(Table)`
  color: #ddd;
`
class Routes extends Component {
  
  componentDidMount() {
    this.props.showRoutes()
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
          <GetIdRoutes />
        </div>
        <TableSchedules responsive bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Start</th>
              <th>Destination</th>
              <th className= 'table-options'>Options</th>
            </tr>  
          </thead>

            <tbody>
        { this.props.Route.data.data && this.props.Route.data.data.map((v,i)=>{
            return (
              <tr>
                <th scope='row' key = { i }>{ i + 1} </th>
                <td>{v.start}</td>
                <td>{v.end}</td>
                <td className='iconData'>
                  <span><EditRoutes updateData={this.updateData} match='update' id={`${v.id}`} /></span>
                  <span onClick={()=> this.props.deleteRoutes(v.id)}> <AiOutlineDelete /> </span>
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
    Route: state.Routes
  }
}
const mapDispatchToProps = {showRoutes, deleteRoutes}
export default connect(mapStateToProps, mapDispatchToProps) (Routes)