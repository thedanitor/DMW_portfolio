import { createMuiTheme } from '@material-ui/core/styles';
import "@fontsource/quantico";

export default createMuiTheme({
  
  palette: {
    // common: {
    //   black: "rgba(119, 119, 119, 0.2)",
    //   white: "rgba(119, 119, 119, 0.2)",
    // },
    primary: {
        main: "rgba(119, 119, 119, 0.2)",
    },
    secondary: {
      main: '#000080',
    },
  },
  typography: {
    fontFamily: [
      'Quantico'
    ]
  }
});