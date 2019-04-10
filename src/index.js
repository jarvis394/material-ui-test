import React from 'react'
import ReactDOM from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/styles'

import theme from './theme'

import App from './components/App'
import './styles/index.css'

try {
ReactDOM.render(
  <MuiThemeProvider theme={ theme }>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
} catch(e) {alert(e)}