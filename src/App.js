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
   <Router>
      <ThemeProvider theme={createMuiTheme}>
      <Appbar />
        <Switch>
          <Route path="/" component={Home} />
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
