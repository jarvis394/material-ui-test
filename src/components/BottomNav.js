import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Icon from '@material-ui/core/Icon'

import React, { Component } from 'react'

const iconHome = (
  <Icon fontSize={ "large" }>home</Icon>
)

class BottomNav extends Component {
  render() {
    return (
      <div className="BottomNav">
        
        <BottomNavigation showLabels={ true }>
          <BottomNavigationAction label={ <p>Text</p> } icon={ iconHome } />
        </BottomNavigation>
        
      </div>
    );
  }
}

export default BottomNav
