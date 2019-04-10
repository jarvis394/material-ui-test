import { BottomNavigation } from '@material-ui/core/BottomNavigation'
import { BottomNavigationAction } from '@material-ui/core/BottomNavigationAction'

//import { makeStyles } from '@material-ui/core/styles'

/*import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationIcon from '@material-ui/icons/LocationOn'
*/

import Icon from '@material-ui/core/Icon'
import React, { Component } from 'react'

/* const styles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
})*/

class BottomNav extends Component {
  render() {
   /* const classes = styles()
    const [ value, setValue ] = useState('restore')

    function handleChange(event, newValue) {
      setValue(newValue)
    }*/
    
    return (
      <div className="Navigation">
        
        <BottomNavigation 
          //value={ value } 
         // className={ classes.root }
          showLabels={ true } 
         // onChange={ handleChange }
        >
          <BottomNavigationAction 
            label={"Restore" }
           // value="restore" 
            icon={ <Icon>home</Icon> } 
          />
          { /*<BottomNavigationAction 
            label="Favorite" 
            value="favorite" 
            icon={ <FavoriteIcon /> } 
          />
          <BottomNavigationAction 
            label="Location" 
            value="location" 
            icon={ <LocationIcon /> } 
          /> */ }
        </BottomNavigation>
        
      </div>
    )
  }
}

export default BottomNav