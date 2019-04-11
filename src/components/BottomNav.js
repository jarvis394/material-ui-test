// MUI Components
import { BottomNavigation, BottomNavigationAction, Paper, Fade } from '@material-ui/core'

// Icons
import { Home as HomeIcon, Settings as SettingsIcon } from '@material-ui/icons'

// React
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