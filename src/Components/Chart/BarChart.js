import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'


export default class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        datasets: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70]
        }]
      }
    }
  }

  render() {
    return (
      <>
        <Bar 
          type= 'bar'
          data= {this.state.data}
          options= {{
            responsive: true,
            maintainAspectRatio: true
          }}
        />
      </>
    )
  }
}
