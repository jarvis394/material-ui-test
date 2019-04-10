import blue from '@material-ui/core/colors/blue'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue.A400,
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme