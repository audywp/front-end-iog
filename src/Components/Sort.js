import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Sorting} from '../Redux/actions/Sort'
import {FaSortAmountDown, FaSortAmountUp} from 'react-icons/fa'
class SortComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortIcon : true,
      icon: <FaSortAmountDown/>,
      sort: ''
    }

    this.changeIcon = (e) => {
      if (this.state.sortIcon === true) {
        
        
        this.setState({
          sortIcon: !this.state.sortIcon,
          icon : this.state.icon = <FaSortAmountUp/>,
          sort: this.state.sort = 1
        })
        this.props.Sorting(this.state.sort)
        

      } else if (this.state.sortIcon === false){
        
        this.setState({
          sortIcon: !this.state.sortIcon,
          icon: this.state.icon = <FaSortAmountDown/>,
          sort: this.state.sort = ''
        })
        this.props.Sorting(this.state.sort)
      }
    }
    
  }
  render() {
    return (
      <>
        <span onClick={this.changeIcon}>{this.state.icon}</span>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    Sort: state.Sorting
  }
}

export default connect(mapStateToProps, {Sorting}) (SortComp)