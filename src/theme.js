import { createMuiTheme } from '@material-ui/core/styles';
import "@fontsource/quantico";

export default createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        background: "rgba(97,158,215,0.95)",
        "&$focused": {
          background: "rgb(54, 137, 214)",
          // fontWeight: "bold"
        },
        // focused: {
        //   color: "rgb(54, 137, 214)",
        // },
      },
    },
    MuiMenuPaper: {
      root: {
        background: "rgba(97,158,215,0.95)",
      }
    },

    MuiMenu: {
      list: {
        padding: 0,
      }
    }
  },

  
  palette: {
    // common: {
    //   black: "rgba(119, 119, 119, 0.2)",
    //   white: "rgba(119, 119, 119, 0.2)",
    // },
    primary: {
        main: "#000080",
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