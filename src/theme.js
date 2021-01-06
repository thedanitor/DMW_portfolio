import { createMuiTheme } from "@material-ui/core/styles";
import "@fontsource/quantico";
import "@fontsource/space-mono";
import "@fontsource/archivo-black";
import "@fontsource/gothic-a1";

export default createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        background: "rgba(97,158,215,0.95)",
        // "&$focused": {
        //   background: "rgb(54, 137, 214)",
        // },
      },
    },
    MuiMenuPaper: {
      root: {
        background: "rgba(97,158,215,0.95)",
      },
    },
    // MuiToolbar: {
    //   gutters: {
    //     paddingLeft: 0, 
    //     paddingRight: 0,
    //   }
    // },
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
    fontFamily: [
      "Gothic A1",
      "Archivo Black",
      // "Space Mono",
    ]
    .join(','),
  },
});

