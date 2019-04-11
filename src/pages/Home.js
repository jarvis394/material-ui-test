import React, { Component } from 'react'

import { Card, Typography, CardContent, CardActions, Button, Fade } from '@material-ui/core'

export default class Home extends Component {
  componentDidMount() {
    this.props.handleChange(null, "home")
  }
  
  render() {
    return (
      <div className="container">
        <Fade in={ true }>
        
        <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          nev
          o
          lent
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          
        </Fade>
      </div>
    )
  }
}
