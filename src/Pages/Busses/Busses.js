import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import styled from 'styled-components'
import { AiOutlineForm, AiOutlineDelete } from 'react-icons/ai'
import { getBus, updateBus,deleteBus } from '../../Redux/actions/Admin/Busses'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
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
        <TableData responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Class</th>
              <th>Seat</th>
              <th className= 'table-options'>Options</th>
            </tr>  
          </thead>

            <tbody>
        { this.props.Bus.data.data && this.props.Bus.data.data.map((v,i)=>{
            return (
              <tr>
                <th scope='row' key = { i }>{ i + 1} </th>
                <td>{v.car_name}</td>
                <td>{v.bus_class}</td>
                <td>{v.bus_seat}</td>
                <td>
                  <span><EditBusses updateData={this.updateData} match='update' id={`${v.id}`} /></span>
                  <span onClick={()=> this.props.deleteBus(v.id)}> <AiOutlineDelete /> </span>
                </td>
              </tr>
            )
          })
        }
            </tbody>
        </TableData>
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
