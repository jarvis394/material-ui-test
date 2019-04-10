import Button from '@material-ui/core/Button'

import React, { Component } from 'react'
import '../styles/App.css'

import { Navigation } from './Navigation'

class Btn extends Component {
  render() {
    return (
      <div className="Button-Material">
        <Button>
          Text
        </Button>
      </div>
    )
  }
}

export default Btn
