import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../assets/images/LakeMargaret.jpg";
import DanPhoto from "../assets/images/DanWeikart.jpg";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    paddingTop: 200,
    paddingBottom: 200,
  },
  backgroundHome: {
    backgroundImage: `url(${Background})`,
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
    // marginTop: -100,
    // marginBottom: 0,
    // marginRight: 0,
    // marginLeft: 0,
    // minHeight: 937,
  },
  name: {
    fontWeight: "bold",

  },
  clearPaper: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
  },
  photo: {
      borderRadius: "50%",
  },
  fullStack: {
      margin: "auto",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundHome}>
      <Container id="about" className={classes.root}>
        <Grid container justify="center">
        
          <Grid item>
          <Slide
              direction="down"
              in="true"
              style={{ transitionDelay: "500ms" }}
            >
                <Paper className={classes.clearPaper}>
            <Typography className={classes.name} variant="h2" color="secondary">
              Dan Weikart
            </Typography>
            </Paper>
            </Slide>
          </Grid>
          
        </Grid>
        <Grid container justify="center" spacing={3}>
        <Grid item xs={3} sm={4}></Grid>
          <Grid item xs={6} sm={4}>
          <Slide
              direction="right"
              in="true"
              style={{ transitionDelay: "1000ms" }}
            >
              <Card className={classes.photo}>
                <CardMedia
                  
                  image={DanPhoto}
                  component="img"
                  title="Dan Weikart"
                />
              </Card>
              </Slide>
          </Grid>
          <Grid item xs={3} sm={4} className={classes.fullStack}>
          <Slide
              direction="up"
              in="true"
              style={{ transitionDelay: "1500ms" }}
            >
                <Paper className={classes.clearPaper}>
            <Typography className={classes.name} variant="h4" color="secondary">
              Full
            </Typography>
            </Paper>
            </Slide>
            <Slide
              direction="up"
              in="true"
              style={{ transitionDelay: "2000ms" }}
            >
                <Paper className={classes.clearPaper}>
            <Typography className={classes.name} variant="h4" color="secondary">
              Stack 
            </Typography>
            </Paper>
            </Slide>
            <Slide
              direction="up"
              in="true"
              style={{ transitionDelay: "2500ms" }}
            >
                <Paper className={classes.clearPaper}>
            <Typography className={classes.name} variant="h4" color="secondary">
              Web 
            </Typography>
            </Paper>
            </Slide>
            <Slide
              direction="up"
              in="true"
              style={{ transitionDelay: "3000ms" }}
            >
                <Paper className={classes.clearPaper}>
            <Typography className={classes.name} variant="h4" color="secondary">
              Developer
            </Typography>
            </Paper>
            </Slide>
          </Grid>
        </Grid>
        
        {/* <Grid container justify="center"> */}
          
          
        {/* </Grid> */}
      </Container>
      
    </div>
  );
}
