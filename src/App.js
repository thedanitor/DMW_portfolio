import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import createMuiTheme from "./theme";
import { ThemeProvider, 
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  backgroundApp: {
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundColor: "rgb(97,158,215)",
      height: "100%",
  },
});


export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundApp}>
   <Router basename="/DMW_portfolio">
      <ThemeProvider theme={createMuiTheme}>
      <Appbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
          <Route path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
          <Route path={`${process.env.PUBLIC_URL}/skills`} component={Skills} />
        </Switch>
        <Footer />
        </ThemeProvider>
    </Router>
    </div>
  );
}
