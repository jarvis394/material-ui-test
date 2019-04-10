import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationIcon from '@material-ui/icons/LocationOn';

import React, { Component, useState } from 'react'

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
}

export default class Navigation extends Component {
  render() {
    const [ value, setValue ] = useState('restore')

    function handleChange(event, newValue) {
      setValue(newValue)
    }
    
    return (
      <div className="Navigation">
        
        <BottomNavigation 
          value={ value } 
          className={ styles.stickToBottom } 
          showLabels={ true } 
          onChange={ handleChange }
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
        
        <BottomNavigation>
          <BottomNavigationA
        </BottomNavigation>
        
      </div>
    )
  }
}
