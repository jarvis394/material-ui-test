import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Paper from '@material-ui/core/Paper'

import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'

import React, { Component } from 'react'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
}

class BottomNav extends Component {
  render() {
    return (
      <Paper elevation={ 2 } style={ styles.root }>
        <BottomNavigation 
          value={ this.props.active } 
          showLabels={ false } 
          onChange={ this.props.handleChange }
        >
          <BottomNavigationAction 
            label="Home"
            value="home" 
            icon={ <HomeIcon /> } 
          />
          <BottomNavigationAction 
            label="Settings" 
            value="settings" 
            icon={ <SettingsIcon /> } 
          />
        </BottomNavigation>
      </Paper>
    )
  }
}

export default BottomNav