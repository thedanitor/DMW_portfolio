import './App.css';
import React, { 
  // useState, useEffect
 } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";
// import Background from "./assets/images/LakeMargaret.jpg"
import createMuiTheme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  backgroundApp: {
      // backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      // backgroundPosition: "center center",
      // backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundColor: "rgb(97,158,215)",
      
      // minWidth: 1024,
      // width: "100%",
      height: "100%",
      // minHeight: 937,
      // position: "fixed",
      // top: 0,
      // left: 0,
      // marginTop: 0,
      // marginBottom: 0,
      // marginRight: 0,
      // marginLeft: 0,
      // minHeight: 937,
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
