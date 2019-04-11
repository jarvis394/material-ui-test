import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade'

import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

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
      <Fade in={ true }>
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
            onClick={ () => this.props.history.push('/') }
          />
          <BottomNavigationAction 
            label="Settings" 
            value="settings" 
            icon={ <SettingsIcon /> } 
            onClick={ () => this.props.history.push('/settings') }
          />
        </BottomNavigation>
      </Paper>
      </Fade>
    )
  }
}

export default withRouter(BottomNav)