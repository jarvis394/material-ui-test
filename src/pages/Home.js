import React, { Component } from 'react'

import { Fade } from '@material-ui/core'

import GoalCard from '../components/GoalCard'

export default class Home extends Component {
  componentDidMount() {
    this.props.handleChange(null, "home")
  }
  
  render() {
    return (
      <div className="container">
        <Fade in={ true }>
        
          <GoalCard />
          
        </Fade>
      </div>
    )
  }
}
