import React, { Component } from 'react'
import '../styles/App.css'

import { BottomNav } from './BottomNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        { BottomNav() }
        
      </div>
    )
  }
}

export default App
