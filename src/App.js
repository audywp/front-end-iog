import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Dashoard from './Pages/Dashboard'
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom'
import history from './utils/history'


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Router history={history}>
            <Navbar/>          
            <Switch>
              <Route path='/dashboard' render={(props) => <Dashoard {...props} />} />
            </Switch>
          </Router>
        </BrowserRouter>
       

      </>
    )
  }
}
