import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
// import Icon from '@material-ui/core/Icon'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationIcon from '@material-ui/icons/LocationOn';

import React, { Component } from 'react'

const [value, setValue] = React.useState('home')

function handleChange(event, newValue) {
  setValue(newValue)
}

class BottomNav extends Component {
  render() {
    return (
      <div className="BottomNav">
        
        <BottomNavigation value={ value } showLabels={ true } styles={{ width: 400 }} onChange={ handleChange }>
          <BottomNavigationAction label="Restore" value="restore" icon={ <RestoreIcon /> } />
          <BottomNavigationAction label="Favorite" value="favorite" icon={ <FavoriteIcon /> } />
          <BottomNavigationAction label="Location" value="location" icon={ <LocationIcon /> } />
        </BottomNavigation>
        
      </div>
    );
  }
}

export default BottomNav
