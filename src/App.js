import "./App.css";
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
import { ThemeProvider } from "@material-ui/core/styles";
import backgroundLg from "./assets/images/Ruby_Beach_Olympic_National_Park_16x9_Large_comp.jpg";
import background from "./assets/images/Ruby_Beach_Olympic_National_Park_16x9_1920_comp.jpg";
import backgroundSm from "./assets/images/Ruby_Beach_Olympic_National_Park_mobile_comp.jpg";

const useStyles = makeStyles(theme => ({
  backgroundApp: {
    // backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    // backgroundColor: "rgb(97,158,215)",
    // height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgb(97,158,215)",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    [theme.breakpoints.up(1260)]: {
      backgroundImage: `url(${backgroundLg})`,
    },
    [theme.breakpoints.between(600, 1260)]: {
      backgroundImage: `url(${background})`,
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${backgroundSm})`,
    },
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundApp}>
      <Router>
        <ThemeProvider theme={createMuiTheme}>
          <Appbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}
