import React, { Component } from 'react'
import { Table } from 'reactstrap'
import styled from 'styled-components'
import { AiOutlineForm, AiOutlineDelete } from 'react-icons/ai'
import { getBus } from '../../Redux/actions/Admin/Busses'
import {connect} from 'react-redux'

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
                  <span> <AiOutlineForm/> </span>
                  <span> < AiOutlineDelete /> </span>
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
const mapDispatchToProps = {getBus}
export default connect(mapStateToProps, mapDispatchToProps)(Busses)
