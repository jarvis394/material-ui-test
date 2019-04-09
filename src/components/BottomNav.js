/*import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
// import Icon from '@material-ui/core/Icon'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationIcon from '@material-ui/icons/LocationOn';

import React, { Component } from 'react'

const [ value, setValue ] = React.useState('restore')
const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  }
}

function handleChange(event, newValue) {
  setValue(newValue)
}

class BottomNav extends Component {
  render() {
    return (
      <div className="BottomNav">
        
        <BottomNavigation value={ value } className={ styles.stickToBottom } showLabels={ true } onChange={ handleChange }>
          <BottomNavigationAction label="Restore" value="restore" icon={ <RestoreIcon /> } showLabel={ true } />
          <BottomNavigationAction label="Favorite" value="favorite" icon={ <FavoriteIcon /> } />
          <BottomNavigationAction label="Location" value="location" icon={ <LocationIcon /> } />
        </BottomNavigation>
        
      </div>
    )
  }
}

export default BottomNav*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
    </BottomNavigation>
  );
}
