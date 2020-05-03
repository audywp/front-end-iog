import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Dashoard from './Pages/Dashboard'
import { BrowserRouter, Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import history from './utils/history'
import Dashboard from './Pages/Dashboard'
import Login from './Components/Login'
import BeAgent from './Pages/BeAgent'
export default class App extends Component {
  render () {
    if (localStorage.getItem('token')) {
      history.push('/dashboard')
      return (
        <BrowserRouter>
          <Router history={history}>
            <Switch>
              <Route path='/' exact render ={() => <Login />} />
              <Route path='/dashboard' render={() => <Dashboard  />} />
            </Switch>
          </Router>
        </BrowserRouter>
      )
    } else {
      return (
        <>
          <BrowserRouter>
            <Router history={history}>
              <Switch>
                <Route path='/' exact render ={() => <Login />} />
                <Route path='/dashboard' render={() => <Dashboard  />} />
                <Route path='/register/agent' exact render={() => <BeAgent />} />
              </Switch>
            </Router>
          </BrowserRouter>
        </>
      )
    }
  }
}
