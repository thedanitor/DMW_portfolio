import { createMuiTheme } from "@material-ui/core/styles";
import "@fontsource/quantico";

export default createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        background: "rgba(97,158,215,0.95)",
        "&$focused": {
          background: "rgb(54, 137, 214)",
        },
      },
    },
    MuiMenuPaper: {
      root: {
        background: "rgba(97,158,215,0.95)",
      },
    },
    MuiMenu: {
      list: {
        padding: 0,
      },
    },
  },
  palette: {
    primary: {
      // main: "#000080",
      // main: "#B20000",
      main: "#33FFE5",
    },
    secondary: {
      // main: "#33FFE5",
      main: "#B20000",
    },
  },
  typography: {
    fontFamily: ["Quantico"],
  },
});

