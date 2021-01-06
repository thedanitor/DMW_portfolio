import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import skills from "../utils/skillList";
import frontEndSkills from "../utils/frontEndSkills";
import backEndSkills from "../utils/backEndSkills";
import relatedSkills from "../utils/relatedSkills";
import Skill from "../components/Skill";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
// import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import BackgroundSkills from "../assets/images/LakeMargaret_topLeft1920.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    // width: "100%",
    paddingTop: 100,
    paddingBottom: 100,
    [theme.breakpoints.between(0, "xs")]: {
      paddingTop: 35,
      paddingBottom: 75, 
    },
  },
  paper: {
    backgroundColor: "rgba(97,158,215,0.95)",
    textAlign: "center",
    [theme.breakpoints.between(400, 600)]: {
      minWidth: 300,
    },
    
  },
  clearPaperTitle: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
    textAlign: "center",
    marginBottom: 20,
  },
  list: {
    textAlign: "center",
  },
  boldFont: {
    fontWeight: "bold",
  },
  divider: {
    // width: "80%",
    // margin: "auto",
    
  },
  titleText: {
    fontWeight: "bold",
    [theme.breakpoints.down(300)]: {
      fontSize: "2rem",
    },
  },
  headingText: {
    fontWeight: "bold",
    padding: "12px 10px 0px 10px",
    [theme.breakpoints.down(300)]: {
      fontSize: "1.5rem",
    },
  },
  backgroundSkills: {
    backgroundImage: `url(${BackgroundSkills})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    backgroundColor: "rgb(97,158,215)",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
  },
}));

export default function Skills() {
  const classes = useStyles();
  return (
    <Slide
      direction="left"
      in="true"
      // style={{ transitionDelay: "500ms" }}
      timeout={750}
    >
      <div className={classes.backgroundSkills}>
        <Container id="skills" className={classes.root}>
        <Grid container justify="center">
            <Grid item sm={6} lg={4}>
              <Slide
                direction="down"
                in="true"
                // style={{ transitionDelay: "500ms" }}
                timeout={500}
              >
                <Paper className={classes.clearPaperTitle}>
                  <Typography
                    className={classes.titleText}
                    variant="h2"
                    color="secondary"
                  >
                    Technical Skills
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
          {/* <Typography
            gutterBottom
            variant="h2"
            component="h2"
            className={classes.titleText}
            color="secondary"
          >
            Technical Skills
          </Typography> */}
          <Grid container justify={"center"} spacing={4}>
            <Grid item sm={6} md={4}>
              <Slide
                direction="up"
                in="true"
                style={{ transitionDelay: "500ms" }}
              >
                <Paper className={classes.paper}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    className={classes.headingText}
                    color="secondary"
                  >
                    Client Side
                  </Typography>
                  <Divider className={classes.divider} variant="middle"/>
                  {frontEndSkills.map(skill => (
                    <List className={classes.list}>
                      <Skill skill={skill}></Skill>
                      
                    </List>
                  ))}
                </Paper>
              </Slide>
            </Grid>
            <Grid item sm={6} md={4}>
              <Slide
                direction="up"
                in="true"
                style={{ transitionDelay: "1000ms" }}
              >
                <Paper className={classes.paper}>
                <Typography
                    gutterBottom
                    variant="h4"
                    className={classes.headingText}
                    color="secondary"
                  >
                    Server Side
                  </Typography>
                  <Divider className={classes.divider} variant="middle" />
                  {backEndSkills.map(skill => (
                    <List>
                      <Skill skill={skill}></Skill>
                    </List>
                  ))}
                </Paper>
              </Slide>
            </Grid>
            <Grid item sm={6} md={4}>
              <Slide
                direction="up"
                in="true"
                style={{ transitionDelay: "1500ms" }}
              >
                <Paper className={classes.paper}>
                <Typography
                    gutterBottom
                    variant="h4"
                    className={classes.headingText}
                    color="secondary"
                  >
                    Related
                  </Typography>
                  <Divider className={classes.divider} variant="middle" />
                  {relatedSkills.map(skill => (
                    <List>
                      <Skill skill={skill}></Skill>
                    </List>
                  ))}
                </Paper>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Slide>
  );
}
