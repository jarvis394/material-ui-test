import { pink, blue } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue.A400,
    },
    secondary: {
      main: pink.A400,
    },
    background: {
      default: '#fff'
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {  }
});

export default theme