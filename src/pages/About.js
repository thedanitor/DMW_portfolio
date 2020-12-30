import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BackgroundAbout from "../assets/images/LakeMargaret_top.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 200,
    paddingBottom: 200,
  },
  paper: {
    backgroundColor: "rgba(119, 119, 119, 0.5)",
    padding: "3rem",
  },
  backgroundAbout: {
    backgroundImage: `url(${BackgroundAbout})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "rgb(97,158,215)",
    
    // minWidth: 1024,
    width: "100%",
    height: "auto",
    minHeight: 1000,
    // position: "fixed",
    // top: 0,
    // left: 0,
    marginTop: -100,
    // marginBottom: 0,
    // marginRight: 0,
    // marginLeft: 0,
    // minHeight: 937,
},
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.backgroundAbout}>
    <Container id="about" className={classes.root}>
      <Typography variant="h2">About Me</Typography>
      <Grid container>
        <Paper className={classes.paper}>
          <Typography variant="body1" color="secondary">
            Chemist turned web developer has the formula to synthesize
            analytical experience and problem-solving abilities with creative
            technical solutions. Analytical chemistry requires me to employ my
            critical thinking, troubleshooting, and problem-solving abilities
            constantly. I have turned my attention to web development because it
            not only requires these skills, but encourages creativity as well.
          </Typography>
          {/* </Paper>
          <Paper className={classes.paper}> */}

          {/* <br></br> */}
          <Typography variant="body1" color="secondary">
            As a recent graduate of University of Washington's coding bootcamp
            for full-stack web development I have learned so much in the past
            year. I am continually building on this solid foundation by
            independently studying and applying new techniques, practices,
            libraries, and languages.
          </Typography>
        {/* </Paper>
        <Paper className={classes.paper}> */}
          <Typography variant="body1" color="secondary">
            When I am not coding I am hopefully biking, hiking, camping,
            reading, or playing music.
            {/* My hobbies include hiking, camping, biking, reading, cooking,
            listening to and playing music. Causes I am dedicated to are social
            justice, sustainability, and climate change. It would be my dream to
            incorporate any of these passions into my work. */}
          </Typography>
        </Paper>
      </Grid>
    </Container>
    </div>
  );
}
