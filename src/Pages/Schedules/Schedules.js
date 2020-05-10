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
  Container
} from 'reactstrap'

import ModalDelete from '../../Components/ModalDelete'
import UpdateSchedule from './UpdateSchedule'
import {connect} from 'react-redux'
import {AiOutlineDelete, AiOutlineForm, AiOutlineCloseCircle} from 'react-icons/ai'
import {FaSearch, FaSortAmountDown, FaSortAmountUp} from 'react-icons/fa'
import CreateSchedules from './CreateSchedules'
// import EditRoutes from './EditRoutes'
import {GetSchedules, DeleteSchedules} from '../../Redux/actions/Admin/Schedules'
import styled from 'styled-components'
import history from '../../utils/history'
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
      sortKey: '',
      sort: 0,
      searchKey: '',
      search: '',
      sortCond: true,
      sortIcon: <FaSortAmountDown />,
      modal: false
    }
    this.setPage = (e) => {
      e.preventDefault()
      this.props.GetSchedules(e.target.textContent, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
      console.log(e.target.textContent)
    }
    this.onHandleChange = async (e) => {
      this.setState({
        sortKey: e.target.value,
        searchKey: e.target.value
      })
      if (this.state.searchKey.length < 1) {
        await this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
      }
      
    }
  }

  
  
  async componentDidMount() {
    await this.props.GetSchedules()
  }
  nextPage = async (e) => {
    e.preventDefault()
    const { page, totalPage } = await this.props.Schedules.data.pageInfo
    await this.props.GetSchedules(page)
    await this.props.GetSchedules(page + 1, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
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
    await this.props.GetSchedules(page - 1, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
      
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
      modal: !this.state.modal
    })
  }

  handleSort = async () => {
    await this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
    this.setState({
      sortCond : !this.state.sortCond,
    })
    if (!this.state.sortCond) {
      this.setState({
        sort: 1,
        sortIcon: <FaSortAmountUp />
      })
      await this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
    } else {
      this.setState({
        sort: 0,
        sortIcon: <FaSortAmountDown />
      })
      await this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
    }
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
    this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
  }
  deleteSchedule = (id) => {
    this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
    this.props.DeleteSchedules(id).then(()=> {
      this.props.GetSchedules(this.props.Schedules.data.pageInfo.page, this.state.searchKey, this.state.search, this.state.sortKey, parseInt(this.state.sort))
      history.push('/dashboard')
      this.setState({
        modal: false
      })
    })
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
              
              <Input
              onChange={this.handleSearch}
              id='search'
              type= 'text'
              name= 'search'
              placeholder= 'search'
              />
              <Label
                style={{
                  color: 'white',
                  fontSize: 15,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: 'none'
                }}
              >By</Label>
              <Label for='searchKey'>
                <Input
                style={{
                  backgroundColor:'rgba(0,0,0,0)',
                  color: 'white',
                  width: 120,
                  paddingLeft: 8
                }}
                onChange={this.onHandleChange}
                type="select" name="searchKey" id="searchKey">
                  <option value='Start'>Start</option>
                  <option value='End'>End</option>
                  <option value='bus_class'>Class</option>
                  <option value='Price'>Price</option>
                  <option value='departure_time'>Time</option>
                  <option value='departure_date'>Date</option>
                </Input>
              </Label>
            </FormGroup>
            <FormGroup style = {{
              marginLeft: 40,
              width: 250
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
                backgroundColor:'rgba(0,0,0,0)',
                color: 'white',
                width: 120
              }}
              onChangeCapture={this.onHandleChange}
              type="select" name="shortKey" id="sortBy">
                <option sortKey='id'>Id</option>
                <option sortKey='price'>Price</option>
              </Input>
              <span onClick={this.handleSort} className='iconSort'>{this.state.sortIcon}</span>
            </FormGroup>
          </Form>
          
          <CreateSchedules/>
        </div>
        <TableSchedules responsive bordered>
          <thead>
            <tr style={{
              textAlign: 'center',
              fontSize: 16
            }}>
              <th>No</th>
              <th>Bus Name</th>
              <th>Class</th>
              <th>Bus Seat</th>
              <th>Start</th>
              <th>End</th>
              <th>Price</th>
              <th>Date</th>
              <th className= 'table-options'>Options</th>
            </tr>  
          </thead>

            <tbody>
        { this.props.Schedules.data.result && this.props.Schedules.data.result.map((v,i)=>{
          const { page, perPage } = this.props.Schedules.data.pageInfo
            return (
              <>
                <tr style={{
                  fontSize: 16
                }}>
                <th scope='row' key = { i }> {((page - 1) * perPage) + (i + 1) } </th>
                <td>{v.car_name}</td>
                <td>{v.bus_class}</td>
                <td>{v.bus_seat}</td>
                <td>{v.start}</td>
                <td>{v.end}</td>
                <td>{v.price}</td>
                <td> {v.departure_date.slice(0,10)}</td>
                <td style={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }}>
                  {/* <span><AiOutlineForm/></span> */}
                  <UpdateSchedule id={`${v.id}`} />
                  <ModalDelete openModal = {this.state.modal} toggle={this.toggle}  onclick={() => this.deleteSchedule(v.id)} />
                </td>
              </tr>
              
              </>
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