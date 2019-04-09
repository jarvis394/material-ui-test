import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Icon from '@material-ui/core/Icon'

import React, { Component } from 'react'

const iconHome = (
  <Icon color={ "primary" }>home</Icon>
)

class BottomNav extends Component {
  iconHome() {
    return (
      <Icon color={ this.props.active === "home" ? "primary" : "default" }>home</Icon>
    )
  }

  homeNavigationButton() {
    return (
      <BottomNavigationAction label={ <p>Text</p> } icon={ this.iconHome() } />
    )
  }

  render() {
    return (
      <div className="BottomNav">
        
        <BottomNavigation showLabels={ true }>
          { this.homeNavigationButton() }
        </BottomNavigation>
        
      </div>
    );
  }
}

export default BottomNav
