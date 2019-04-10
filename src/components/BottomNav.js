import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Paper from '@material-ui/core/Paper'

// import makeStyles from '@material-ui/core/styles'

import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationIcon from '@material-ui/icons/LocationOn'

import React, { Component } from 'react'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
}

class BottomNav extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      active: 'restore'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  state = { active: 'restore' }

  handleClick(e, value) {
    this.setState({ active: value })
  }
  
  render() {
    return (
      <Paper className="Navigation" style={ styles.root }>
        <BottomNavigation 
          value={ this.state.active } 
          showLabels={ false } 
          onChange={ this.handleClick.bind( }
        >
          <BottomNavigationAction 
            label="Restore"
            value="restore" 
            icon={ <RestoreIcon /> } 
          />
          <BottomNavigationAction 
            label="Favorite" 
            value="favorite" 
            icon={ <FavoriteIcon /> } 
          />
          <BottomNavigationAction 
            label="Location" 
            value="location" 
            icon={ <LocationIcon /> } 
          /> 
        </BottomNavigation>
      </Paper>
    )
  }
}

export default BottomNav