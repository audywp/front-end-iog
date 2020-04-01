import React, { Component } from 'react'
import {Doughnut as ChartDoughnut} from 'react-chartjs-2'


export default class Doughnut extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: 'Doughnut',
      data : {
        datasets: [
          {
            data: [73, 28, 20],
            backgroundColor: ['#eb2f06','#f6b93b','#0c2461'],
            rotation : 2*Math.PI 
          }
          ],
          labels: [
              'User Register',
              'User Verified',
              'User Active'
          ],
          
        }   
    }
  }

  render() {
    
    return (
      <>
        <ChartDoughnut 
          data={this.state.data}
          options= {{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </>
    )
  }
}
