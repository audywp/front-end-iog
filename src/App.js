import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Dashoard from './Pages/Dashboard'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Login from './Pages/Login'



export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/dashboard' render={() => <Dashoard />} />
          </Switch>
        </BrowserRouter>
       

      </>
    )
  }
}
