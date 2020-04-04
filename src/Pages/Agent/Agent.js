import React, { Component } from 'react'
import { Table, Input, Form, FormGroup,Label, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import {connect} from 'react-redux'
import {AiOutlineDelete} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
// import CreateRoutes from './CreateRoutes'
// import EditRoutes from './EditRoutes'
import {GetDataAgent} from '../../Redux/actions/Admin/Agent'
import styled from 'styled-components'

const TableSchedules = styled(Table)`
  color: #ddd;
`
class Agent extends Component {
  
  componentDidMount() {
    this.props.GetDataAgent()
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
          {/* <CreateRoutes /> */}
        </div>
        <TableSchedules responsive bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th className= 'table-options'>Options</th>
            </tr>  
          </thead>

            <tbody>
        { this.props.Agent.data.data && this.props.Agent.data.data.map((v,i)=>{
            return (
              <tr>
                <th scope='row' key = { i }>{ i + 1} </th>
                <td>{v.name}</td>
                <td>
                  {/* <span><EditRoutes updateData={this.updateData} match='update' id={`${v.id}`} /></span> */}
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
    Agent: state.Agent
  }
}
const mapDispatchToProps = {GetDataAgent}
export default connect(mapStateToProps, mapDispatchToProps) (Agent)