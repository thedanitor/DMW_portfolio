import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import frontEndSkills from "../utils/frontEndSkills";
import backEndSkills from "../utils/backEndSkills";
import relatedSkills from "../utils/relatedSkills";
import Skill from "../components/Skill";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
// import BackgroundSkillsXl from "../assets/images/LakeMargaret_topLeftFull.jpg";
// import BackgroundSkillsLg from "../assets/images/LakeMargaret_topLeft1920.jpg";
// import BackgroundSkillsMd from "../assets/images/LakeMargaret_topLeft1280.jpg";
// import BackgroundSkillsSm from "../assets/images/LakeMargaret_topLeft960.jpg";
import backgroundLg from "../assets/images/Ruby_Beach_Olympic_National_Park_16x9_Large_comp.jpg";
import background from "../assets/images/Ruby_Beach_Olympic_National_Park_16x9_1920_comp.jpg";
import backgroundSm from "../assets/images/Ruby_Beach_Olympic_National_Park_mobile_comp.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
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

  },
  titleText: {
    fontFamily: "Archivo Black",
    [theme.breakpoints.down(350)]: {
      fontSize: "2rem",
    },
  },
  headingText: {
    fontFamily: "Archivo Black",
    padding: "12px 10px 0px 10px",
    [theme.breakpoints.down(300)]: {
      fontSize: "1.5rem",
    },
  },
  backgroundSkills: {
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
    // [theme.breakpoints.down(400)]: {
    //   backgroundImage: `url(${backgroundSm})`,
    // },
  },
}));

export default function Skills() {
  const classes = useStyles();
  return (
    <Slide
      direction="left"
      in="true"
      timeout={750}
    >
      <div className={classes.backgroundSkills}>
        <Container id="skills" className={classes.root}>
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
                    Technical Skills
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
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
                style={{ transitionDelay: "600ms" }}
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
                style={{ transitionDelay: "700ms" }}
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
