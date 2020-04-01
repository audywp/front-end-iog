import React, { Component } from 'react'
import { Table } from 'reactstrap'
import styled from 'styled-components'
import { AiOutlineForm, AiOutlineDelete } from 'react-icons/ai'

const TableData = styled(Table)`
  color: #ddd
`
export default class Busses extends Component {
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
              <th>Price</th>
              <th className= 'table-options'>Options</th>
            </tr>
          </thead>

            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Damri</td>
                <td>Royal</td>
                <td>45</td>
                <td >450.000</td>
                <td>
                  <span> <AiOutlineForm/> </span>
                  <span> < AiOutlineDelete /> </span>
                </td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Damri</td>
                <td>Royal</td>
                <td>45</td>
                <td>450.000</td>
                <td>
                  <span> <AiOutlineForm/> </span>
                  <span> < AiOutlineDelete /> </span>
                </td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Damri</td>
                <td>Royal</td>
                <td>45</td>
                <td>450.000</td>
                <td>
                  <span> <AiOutlineForm/> </span>
                  <span> < AiOutlineDelete /> </span>
                </td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>Damri</td>
                <td>Royal</td>
                <td>45</td>
                <td>450.000</td>
                <td>
                  <span> <AiOutlineForm/> </span>
                  <span> < AiOutlineDelete /> </span>
                </td>
              </tr>
              <tr>
                <th scope='row'>5</th>
                <td>Damri</td>
                <td>Royal</td>
                <td>45</td>
                <td>450.000</td>
                <td>
                  <span> <AiOutlineForm/> </span>
                  <span> < AiOutlineDelete /> </span>
                </td>
              </tr>
            </tbody>
        </TableData>
      </>
    )
  }
}
