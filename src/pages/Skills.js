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
// import ListItem from "@material-ui/core/ListItem";

export default function Skills() {
  return (
    <Container>
      <Typography
        gutterBottom
        variant="h2"
        component="h2"
        className="project-title"
      >
        Skills
      </Typography>
      <Grid container justify={"center"} spacing={5}>
        <Grid item sm={6} md={4}>
          <Slide direction="up" in="true" style={{ transitionDelay: "500ms" }}>
            <Paper>
          {frontEndSkills.map(skill => (
            <List>
              <Skill skill={skill}></Skill>
            </List>
          ))}
          </Paper>
          </Slide>
        </Grid>
        <Grid item sm={6} md={4}>
          <Slide direction="up" in="true" style={{ transitionDelay: "500ms" }}>
            <Paper>
          {backEndSkills.map(skill => (
            <List>
              <Skill skill={skill}></Skill>
            </List>
          ))}
          </Paper>
          </Slide>
        </Grid>
        <Grid item sm={6} md={4}>
          <Slide direction="up" in="true" style={{ transitionDelay: "500ms" }}>
            <Paper>
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
  );
}
