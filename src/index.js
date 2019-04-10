import React from 'react'
import ReactDOM from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'

import App from './components/App'
import './styles/index.css'

ReactDOM.render(
  <MuiThemeProvider theme={ theme }>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
