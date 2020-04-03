import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Dashoard from './Pages/Dashboard'
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom'
import EditBusses from './Pages/Busses/EditBusses'
import history from './utils/history'


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Router history={history}>
            <Navbar/>
            <EditBusses />
            <Switch>
              <Route path='/dashboard' render={() => <Dashoard />} />
            </Switch>
          </Router>
        </BrowserRouter>
       

      </>
    )
  }
}
