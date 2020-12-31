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

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 100,
    paddingBottom: 200,
  },
  paper: {
    backgroundColor: "rgba(97,158,215,0.95)",
  },
  list: {
    alignContent: "center",
  },
  boldFont: {
    fontWeight: "bold",
  },
  backgroundSkills: {
    backgroundImage: `url(${BackgroundSkills})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "rgb(97,158,215)",
    
    // minWidth: 1024,
    width: "100%",
    height: "100%",
    // minHeight: 1000,
    position: "fixed",
    // top: 0,
    // left: 0,
    // marginBottom: 0,
    // marginRight: 0,
    // marginLeft: 0,
    // minHeight: 937,
},
});

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
      <Typography
        gutterBottom
        variant="h2"
        component="h2"
        className="skills-title"
        color="secondary"
      >
        Skills
      </Typography>
      <Grid container justify={"center"} spacing={5}>
        <Grid item sm={6} md={4}>
          <Slide direction="up" in="true" style={{ transitionDelay: "500ms" }}>
            <Paper className={classes.paper}>
          {frontEndSkills.map(skill => (
            <List className={classes.list}>
              <Skill skill={skill}></Skill>
              <Divider style={{  width: "80%" }} />
            </List>
          ))}
          </Paper>
          </Slide>
        </Grid>
        <Grid item sm={6} md={4}>
          <Slide direction="up" in="true" style={{ transitionDelay: "1000ms" }}>
            <Paper className={classes.paper}>
          {backEndSkills.map(skill => (
            <List>
              <Skill skill={skill}></Skill>
            </List>
          ))}
          </Paper>
          </Slide>
        </Grid>
        <Grid item sm={6} md={4}>
          <Slide direction="up" in="true" style={{ transitionDelay: "1500ms" }}>
            <Paper className={classes.paper}>
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
