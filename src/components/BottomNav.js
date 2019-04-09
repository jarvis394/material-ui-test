import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import React, { Component } from 'react'

class BottomNav extends Component {
  render() {
    return (
      <div className="BottomNav">
        
        <BottomNavigation>
          <BottomNavigationAction label={ <p>Text</p> } />
        </BottomNavigation>
        
      </div>
    );
  }
}

export default BottomNav
