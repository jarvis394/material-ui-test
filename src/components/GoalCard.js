import React, { Component } from 'react'

// MUI Styles
import { withStyles } from '@material-ui/core/styles'

// MUI Components
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

class GoalCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="secondary">asd</Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(GoalCard)
