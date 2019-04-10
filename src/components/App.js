import React, { Component } from 'react'
import '../styles/App.css'

//import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import BottomNav from './BottomNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        
      
          <Typography variant="h3" color="textSecondary" align="center">Validate JSON</Typography>
        
        
        <BottomNav />
        
      </div>
    )
  }
}

export default App
