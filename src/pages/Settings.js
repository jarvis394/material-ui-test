import React, { Component } from 'react'

import { Fade } from '@material-ui/core'

export default class Settings extends Component {
  componentDidMount() {
    this.props.handleChange(null, "settings")
  }
  
  render() {
    return (
      <div className="container">
        <Fade in={ true }>
          <p className="flow-text">Settings</p>
        </Fade>
      </div>
    )
  }
}
