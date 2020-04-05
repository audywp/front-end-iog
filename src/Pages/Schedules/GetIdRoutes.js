import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {showRoutes} from '../../Redux/actions/Admin/Route'
import {connect} from 'react-redux'
class GetIdRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dropdownOpen: false
     }

     this.toggle = (e) => {
       this.setState({
         dropdownOpen: !this.state.dropdownOpen
       })
     }
  }

  componentDidMount(){
    
    this.props.showRoutes()
    console.log(this.props.id)
    console.log(this.props.match)
  }
  render() {
    return (
      <>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Id Route
          </DropdownToggle>
          <DropdownMenu>
            {this.props.Route.data.data && this.props.Route.data.data.map((route, i) => {
              return (
                <DropdownItem idRoute={`${route.id}`}> { route.id } : {route.start} - {route.end} </DropdownItem>
              )
            })}
          </DropdownMenu>
        </ButtonDropdown>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Route: state.Routes

  }
}
const mapDispatchToProps = {showRoutes}
export default connect(mapStateToProps, mapDispatchToProps) (GetIdRoutes)