import React, { Component } from 'react'
import '../styles/App.css'

import Button from '@material-ui/core/Button'

import BottomNav from './BottomNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Button >Text</Button>
        
        <BottomNav />
        
      </div>
    );
  }
}

export default App
