import React, { Component } from 'react'
import { Table, Input, Form, FormGroup,Label, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import styled from 'styled-components'
import { AiOutlineDelete } from 'react-icons/ai'
import {FaSearch,FaSortAmountDown,FaSortAmountUp} from 'react-icons/fa'
import { getBus, updateBus,deleteBus } from '../../Redux/actions/Admin/Busses'
import {connect} from 'react-redux'
import CreateBusses from './CreateBusses' 
import EditBusses from './EditBusses'
import {Sorting} from '../../Redux/actions/Sort'

const TableData = styled(Table)`
  color: #ddd
`
class Busses extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage : 1,
      sortIcon : true,
      icon: <FaSortAmountDown/>,
      sort: '',
      startFrom: 1,
      search: '',
      disableNext: false,
      disablePrev: false
    }

    this.nextPage = async (e) => {
      e.preventDefault()
      const {currentPage, sort, search, startFrom} = this.state
      await this.props.getBus(this.props.Bus.data.pageInfo.page + 1, sort, search).then( async () => {
       await this.setState({
          startFrom: this.state.startFrom + this.props.Bus.data.pageInfo.perPage
        })
        if (this.props.Bus.data.pageInfo && this.props.Bus.data.pageInfo.page === this.props.Bus.data.pageInfo && this.props.Bus.data.pageInfo.totalPage) {
          this.props.getBus(this.props.getBus(this.props.Bus.data.pageInfo.page, sort, search), sort, search)
          this.setState({
            disableNext: !this.state.disableNext,
            disablePrev: false,
          })
        } else {
          this.setState({
            disableNext: false
          })
        }
      })
    }

    this.prevPage = async (e) => {
      e.preventDefault()
      const {currentPage, sort, search, startFrom} = this.state
      await this.props.getBus(this.props.Bus.data.pageInfo.page - 1, sort, search).then( async () => {
        await this.setState({
          startFrom: this.state.startFrom - this.props.Bus.data.pageInfo.perPage
        })
        if (this.props.Bus.data.pageInfo && this.props.Bus.data.pageInfo.page === 1) {
          this.props.getBus(this.props.Bus.data.pageInfo.page, sort, search)
          this.setState({
            disablePrev: true,
            disableNext: false
          })
        } else {
          this.setState({
            disablePrev: false
          })
        }
      })
    }

    this.searchKey = (e) => {
      this.setState({
        search: e.target.value
      })
      this.props.getBus(this.state.currentPage, this.state.sort, this.state.search)
    }
    
    this.changeIcon = (e) => {
      if (this.state.sortIcon === true) { 
        this.setState({
          sortIcon: !this.state.sortIcon,
          icon : this.state.icon = <FaSortAmountUp/>,
          sort: this.state.sort = 1
        })
        this.props.getBus(this.state.currentPage,this.state.sort)
      } else if (this.state.sortIcon === false){
        
        this.setState({
          sortIcon: !this.state.sortIcon,
          icon: <FaSortAmountDown/>,
          sort: ''
        })
        this.props.getBus(this.state.currentPage,this.state.sort)
      }
    }
    this.setPage = (e) => {
      e.preventDefault()
      this.props.getBus(e.target.textContent, '')
    }


  }
  async componentDidMount() {
    const {currentPage, sort, search} = this.state
    await this.props.getBus(currentPage, sort, search)
  }

  updateData = (id, data) => {
    this.props.getBus()
    this.props.updateBus(id, data)
    alert('ok')
  }


  render() {
    console.log(this.state)
    console.log(this.props.Bus.data.pageInfo)
    const page = []
    const totalPage = this.props.Bus.data.pageInfo && this.props.Bus.data.pageInfo.totalPage
    for (let index = 0; index < totalPage; index++) {
      page.push(<PaginationItem key={index}> <PaginationLink onClick={this.setPage} href='#'>{index + 1}</PaginationLink></PaginationItem>)
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
                onChange= {this.searchKey}
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
              <th className="text-center">No</th>
              <th>Name</th>
              <th>Class</th>
              <th className="text-center">Seat | <span onClick={(this.changeIcon)}>{this.state.icon}</span></th>
              <th className= 'table-options text-center' >Options</th>
            </tr>  
          </thead>

            <tbody>
        { this.props.Bus.data.data && this.props.Bus.data.data.map((v,i)=>{
            return (
              <tr>
                <th class="text-center" scope='row' key = { i }> { i + this.state.startFrom} </th>
                <td>{v.car_name}</td>
                <td>{v.bus_class}</td>
                <td class="text-center">{v.bus_seat}</td>
                <td class="text-center iconData">
                  <span><EditBusses updateData={this.updateData} match='update' id={`${v.id}`} /></span>
                  <span onClick={()=> this.props.deleteBus(v.id)}> <AiOutlineDelete /></span>
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
    Bus : state.Busses,
  }
}
const mapDispatchToProps = {getBus, updateBus, deleteBus}
export default connect(mapStateToProps, mapDispatchToProps)(Busses)
