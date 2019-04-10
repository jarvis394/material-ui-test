import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Icon from '@material-ui/core/Icon'
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

//const [ value, setValue ] = React.useState('restore')

    /*function handleChange(event, newValue) {
      setValue(newValue)
    }*/

class BottomNav extends Component {
  render() {
    // const classes = styles()
    
    
    return (
      <div className="Navigation">
        
        <BottomNavigation 
          value={ "restore" } 
          style={ styles.root }
          showLabels={ false } 
          // onChange={ handleChange }
        >
          <Paper>
          <BottomNavigationAction 
            label={"Restore" }
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
          </Paper>
        </BottomNavigation>
      </div>
    )
  }
}

export default BottomNav