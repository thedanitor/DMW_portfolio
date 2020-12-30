import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // "& > *": {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
  },
  paper: {
    backgroundColor: "rgba(119, 119, 119, 0.5)",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
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
  );
}
