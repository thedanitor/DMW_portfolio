import React from "react";
import Container from "@material-ui/core/Container";
import Project from "../components/Project";
import portfolioList from "../utils/portfolioList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BackgroundProjectsXl from "../assets/images/LakeMargaret_topCenterFull.jpg";
import BackgroundProjectsLg from "../assets/images/LakeMargaret_topCenter1920.jpg";
import BackgroundProjectsMd from "../assets/images/LakeMargaret_topCenter1280.jpg";
import BackgroundProjectsSm from "../assets/images/LakeMargaret_topCenter960.jpg";

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
  clearPaperTitle: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
    textAlign: "center",
    marginBottom: 20,
  },
  clearPaperProjects: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
  },
  projectGrid: {
    maxWidth: 500,
  },
  titleText: {
    fontFamily: "Archivo Black",
    [theme.breakpoints.down(260)]: {
      fontSize: "2rem",
    },
  },
  backgroundProjects: {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgb(97,158,215)",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    [theme.breakpoints.up("xl")]: {
      backgroundImage: `url(${BackgroundProjectsXl})`,
    },
    [theme.breakpoints.between("sm", "xl")]: {
      backgroundImage: `url(${BackgroundProjectsLg})`,
    },
    [theme.breakpoints.between("xs", "sm")]: {
      backgroundImage: `url(${BackgroundProjectsMd})`,
    },
    [theme.breakpoints.down(400)]: {
      backgroundImage: `url(${BackgroundProjectsSm})`,
    },
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Slide
      direction="left"
      in="true"
      timeout={500}
    >
      <div className={classes.backgroundProjects}>
        <Container id="projects" className={classes.root}>
          <Grid container justify="center">
            <Grid item sm={6} lg={4}>
              <Slide
                direction="down"
                in="true"
                timeout={500}
              >
                <Paper className={classes.clearPaperTitle}>
                  <Typography
                    className={classes.titleText}
                    variant="h2"
                    color="secondary"
                  >
                    Projects
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
          <Grid container justify={"center"} spacing={4}>
            {portfolioList.map((proj, index) => (
              <Grid item md={6} lg={4} key={index} className={classes.projectGrid}>
                <Slide
                  direction="up"
                  in="true"
                  style={{ transitionDelay: proj.transition }}
                >
                  <Paper className={classes.clearPaperProjects}>
                    <Project
                      name={proj.name}
                      image={proj.image}
                      imageLarge={proj.imageLarge}
                      tech={proj.tech}
                      description={proj.description}
                      webUrl={proj.webUrl}
                      githubUrl={proj.githubUrl}
                      transition={proj.transition}
                      key={index}
                    />
                  </Paper>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Slide>
  );
}
