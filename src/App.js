import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Dashoard from './Pages/Dashboard'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'




export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/dashboard' render={() => <Dashoard />} />
          </Switch>
        </BrowserRouter>
       

      </>
    )
  }
}
