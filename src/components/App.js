import React, { Component } from 'react'
import '../styles/App.css'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import BottomNav from './BottomNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Grid container alignItems="center" spacing={8}>
          <Grid item>Hi world</Grid>
          <Grid item xs>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              fullWidth
              placeholder={'Search by email address, phone number, or user UID'}
            />
          </Grid>
        </Grid>
        
        <BottomNav />
        
      </div>
    );
  }
}

export default App
