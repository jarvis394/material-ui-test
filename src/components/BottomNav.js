import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Icon from '@material-ui/core/Icon'
import HomeIcon from '@material-ui/icons/Home'

import React, { Component } from 'react'

class BottomNav extends Component {
  

  render() {
    return (
      <div className="BottomNav">
        
        <BottomNavigation showLabels={ true }>
          <BottomNavigationAction label="Home" icon={ <HomeIcon /> } />
        </BottomNavigation>
        
      </div>
    );
  }
}

export default BottomNav
