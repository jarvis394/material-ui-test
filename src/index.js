import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './components/App'

import './styles/index.css'
/*
import { CssBaseline } from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import { Theme } from './theme'*/

/*ReactDOM.render(
  <ThemeProvider theme={ Theme }>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)*/

ReactDOM.render(<App />, document.getElementById('root'))