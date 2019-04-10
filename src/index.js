import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/index.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

ReactDOM.render(
  <App />
  /*<ThemeProvider theme={ theme }>
    <CssBaseline />
    <App />
  </ThemeProvider>*/,
  document.getElementById('root')
)
