// React
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Styles
import '../styles/App.css'

// Pages
import Home from '../pages/Home'
import Settings from '../pages/Settings'

// Components
import BottomNav from './BottomNav'

// MUI Components
import { Hidden } from '@material-ui/core'

class App extends Component {
  state = {
    active: 'home'
  }

  handleChange(e, value) {
    this.setState({ active: value })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={ () => <Home handleChange={ this.handleChange.bind(this) } /> } />
          <Route exact path="/settings" render={ () => <Settings handleChange={ this.handleChange.bind(this) } /> } />
        </Switch>

        <Hidden lgUp>
          <BottomNav active={ this.state.active } handleChange={ this.handleChange.bind(this) } />
        </Hidden>
      </div>
    )
  }
}

export default App
