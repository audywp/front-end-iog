import React, { Component } from 'react'
import {
  Table,
  Input,
  Form,
  FormGroup,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
} from 'reactstrap'
import {connect} from 'react-redux'
import {AiOutlineDelete, AiOutlineForm} from 'react-icons/ai'
import {FaSearch, FaSortAmountDown, FaSortAmountUp} from 'react-icons/fa'
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
      currentPage:1,
      disableNext: false,
      disablePrev: false,
      dropdownOpen: false,
      sort: 0,
      sortCond: true,
      sortIcon: <FaSortAmountDown />
    }
    this.setPage = (e) => {
      e.preventDefault()
      this.props.GetSchedules(e.target.textContent)
      console.log(e.target.textContent)
    }
  }
  
  async componentDidMount() {
    await this.props.GetSchedules(this.state.currentPage)
  }
  nextPage = async (e) => {
    e.preventDefault()
    const { page, totalPage } = await this.props.Schedules.data.pageInfo
    await this.props.GetSchedules(page)
    await this.props.GetSchedules(page + 1)
    if (page !== totalPage - 1) {
        this.setState({
          disableNext : false
        })
      }
      if (page === totalPage -1) {
        this.setState({
          disableNext : !this.state.disableNext
        })
      }   
  }
  prevPage = async (e) => {
    e.preventDefault()
    const { page } = await this.props.Schedules.data.pageInfo
    await this.props.GetSchedules(page)
    await this.props.GetSchedules(page - 1)
      
    if (page !== 1) {
        this.setState({
          disablePrev : false
        })
      }

      if (page === 1) {
        this.setState({
          disablePrev : !this.state.disablePrev
        })
      }
        
      
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  handleSort = () => {

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
            <FormGroup style = {{
              marginLeft: 40,
              width: 200
            }}>
              <Label style={{
                color: 'white',
                fontSize: 15,
                width: 250,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none'
              }} for="sortBy">Sort by</Label>
              <Input
              style={{
                backgroundColor: 'rgba(0,0,0,0)',
                color: 'white',
                width: 120
              }}  
              type="select" name="shortBy" id="sortBy">
                <option>Id</option>
                <option>Price</option>
              </Input>
            </FormGroup>
          </Form>
          <CreateSchedules/>
        </div>
        <TableSchedules responsive bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Bus Name</th>
              <th>Class</th>
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
          const { page, perPage, totalData, totalPage } = this.props.Schedules.data.pageInfo
            return (
              <tr>
                <th scope='row' key = { i }> {((page - 1) * perPage) + (i + 1) } </th>
                <td>{v.car_name}</td>
                <td>{v.bus_class}</td>
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
              <PaginationLink disabled={this.state.disablePrev} onClick={this.prevPage} previous />
            </PaginationItem>
              {page}
            <PaginationItem>
              <PaginationLink disabled={this.state.disableNext} onClick={this.nextPage} next/>
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