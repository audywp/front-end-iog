import React, { Component } from 'react'
import { Table, Input, Form, FormGroup,Label, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import {connect} from 'react-redux'
import {AiOutlineDelete} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import CreateRoutes from './CreateRoutes'
import EditRoutes from './EditRoutes'
import {showRoutes, deleteRoutes} from '../../Redux/actions/Admin/Route'
import styled from 'styled-components'
import LoadingScreen from '../../Components/LoadingScreen'
// import GetIdRoutes from '../Schedules/GetIdRoutes'

const TableSchedules = styled(Table)`
  color: #ddd;
`
class Routes extends Component {
  constructor(props) {
    super(props)
    this.state= {
      currentPage: 1,
      sort: 0
    }
    this.nextPage = (e) => {
      e.preventDefault()
      this.setState({
        currentPage: this.state.currentPage + 1
      })
      this.props.showRoutes(this.state.currentPage)
    }
  
    this.prevPage = (e) => {
      e.preventDefault()
      this.setState({
        currentPage: this.state.currentPage - 1
      })
      this.props.showRoutes(this.state.currentPage)
    }

    this.setPage = (e) => {
      e.preventDefault()
      this.props.showRoutes(e.target.textContent)
    }
  }
  
  
  async componentDidMount() {
    await this.props.showRoutes()
  }
  render() {
    const page = []
    const disablePage = []
    const totalPage = this.props.Route.data.pageInfo && this.props.Route.data.pageInfo.totalPage
    for (let index = 0; index < totalPage; index++) {
        page.push(<PaginationItem key={index}> <PaginationLink onClick={this.setPage} href='#'>{index + 1}</PaginationLink> </PaginationItem>)
      }
    if (!this.props.Route.isLoading) {
      return(
        <Container>
          <LoadingScreen/>
        </Container>
      )   
    } else {
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
            <CreateRoutes />
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
}

const mapStateToProps = (state) => {
  return {
    Route: state.Routes
  }
}
const mapDispatchToProps = {showRoutes, deleteRoutes}
export default connect(mapStateToProps, mapDispatchToProps) (Routes)