// import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./assets/images/LakeMargaret.jpg"
import createMuiTheme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  backgroundHome: {
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      // backgroundRepeat: "no-repeat",
      marginTop: 0,
      marginBottom: 0,
      // marginRight: "auto",
      // marginLeft: "auto",
      minHeight: 900,
  }
});


export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundHome}>
    <Router>
      <ThemeProvider theme={createMuiTheme}>
      <Appbar />
      {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
        </ThemeProvider>
    </Router>
    </div>
  );
}
