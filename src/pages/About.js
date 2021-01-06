import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import BackgroundAboutXl from "../assets/images/LakeMargaret_topRightFull.jpg";
import BackgroundAboutLg from "../assets/images/LakeMargaret_topRight1920.jpg";
import BackgroundAboutMd from "../assets/images/LakeMargaret_topRight1280.jpg";
import BackgroundAboutSm from "../assets/images/LakeMargaret_topRight960.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 100,
    paddingBottom: 100,
    justifyContent: "center",
    [theme.breakpoints.between(0, "xs")]: {
      paddingTop: 35,
      paddingBottom: 75,
    },
  },
  paper: {
    backgroundColor: "rgba(97,158,215,0.95)",
    padding: "2rem",
    [theme.breakpoints.between(200, "xs")]: {
      padding: "1rem",
    },
    [theme.breakpoints.between(0, 200)]: {
      padding: "0.25rem",
    },
  },
  clearPaperTitle: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
    textAlign: "center",
    marginBottom: 20,
  },
  titleText: {
    fontFamily: "Archivo Black",
    [theme.breakpoints.down(250)]: {
      fontSize: "2rem",
    },
  },
  aboutText: {
    [theme.breakpoints.between(250, 450)]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down(250)]: {
      fontSize: "0.875rem",
    },
  },
  backgroundAbout: {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    backgroundColor: "rgb(97,158,215)",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    [theme.breakpoints.up("xl")]: {
      backgroundImage: `url(${BackgroundAboutXl})`,
    },
    [theme.breakpoints.between("sm", "xl")]: {
      backgroundImage: `url(${BackgroundAboutLg})`,
    },
    [theme.breakpoints.between("xs", "sm")]: {
      backgroundImage: `url(${BackgroundAboutMd})`,
    },
    [theme.breakpoints.down(400)]: {
      backgroundImage: `url(${BackgroundAboutSm})`,
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Slide
      direction="left"
      in="true"
      // style={{ transitionDelay: "500ms" }}
      timeout={750}
    >
      <div className={classes.backgroundAbout}>
        <Container id="about" className={classes.root}>
          <Grid container justify="center">
            <Grid item sm={6} lg={4}>
              <Slide direction="down" in="true" timeout={500}>
                <Paper className={classes.clearPaperTitle}>
                  <Typography
                    className={classes.titleText}
                    variant="h2"
                    color="secondary"
                  >
                    About Me
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
          <Grid container>
            <Slide
              direction="up"
              in="true"
              style={{ transitionDelay: "500ms" }}
            >
              <Paper className={classes.paper}>
                <Typography variant="h6" color="primary" className={classes.aboutText}>
                  Chemist turned web developer has the formula to synthesize
                  analytical experience and problem-solving abilities with
                  creative technical solutions. Analytical chemistry requires me
                  to employ my critical thinking, troubleshooting, and
                  problem-solving abilities constantly. I have turned my
                  attention to web development because it not only requires
                  these skills, but encourages creativity as well.
                </Typography>
                <br />
                <Typography variant="h6" color="primary" className={classes.aboutText}>
                  As a recent graduate of University of Washington's coding
                  bootcamp for full-stack web development I have learned so much
                  in the past year. I am continually building on this solid
                  foundation by independently studying and applying new
                  techniques, practices, libraries, and languages.
                </Typography>
                <br />
                <Typography variant="h6" color="primary" className={classes.aboutText}>
                  When I am not coding I am hopefully biking, hiking, camping,
                  reading, or playing music.
                  {/* My hobbies include hiking, camping, biking, reading, cooking,
            listening to and playing music. Causes I am dedicated to are social
            justice, sustainability, and climate change. It would be my dream to
            incorporate any of these passions into my work. */}
                </Typography>
              </Paper>
            </Slide>
          </Grid>
        </Container>
      </div>
    </Slide>
  );
}
