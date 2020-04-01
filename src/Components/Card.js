import React, { Component } from 'react'
import { Card as CardComp, CardBody } from 'reactstrap'
import styled from 'styled-components'
export default class Card extends Component {
  render() {
    return (
      <>
        <CardComp>
          <CardBody>
            <h1>{this.props.total}</h1>
            <p>Total {this.props.module}</p>
            <> {this.props.icon} </>
          </CardBody>
        </CardComp>
      </>
    )
  }
}
