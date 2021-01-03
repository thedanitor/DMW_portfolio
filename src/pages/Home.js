import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DanPhoto from "../assets/images/DanWeikart.jpg";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Fade from '@material-ui/core/Fade';
import BackgroundHomeXl from "../assets/images/LakeMargaret_topWideFull.jpg";
import BackgroundHomeLg from "../assets/images/LakeMargaret_top1920x1080comp.jpg";
import BackgroundHomeMd from "../assets/images/LakeMargaret_top1280.jpg";
import BackgroundHomeSm from "../assets/images/LakeMargaret_top960.jpg";
import BackgroundHomeXs from "../assets/images/LakeMargaret_top600.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    paddingTop: 100,
    paddingBottom: 200,
  },
  backgroundHome: {
    [theme.breakpoints.up("xl")]: {
      backgroundImage: `url(${BackgroundHomeXl})`,
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
    },
    [theme.breakpoints.between("sm", "xl")]: {
    backgroundImage: `url(${BackgroundHomeLg})`,
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
  },
  // [theme.breakpoints.between("sm", "lg")]: {
  //   backgroundImage: `url(${BackgroundHomeMd})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundAttachment: "fixed",
  //   backgroundColor: "rgb(97,158,215)",
  //   // minWidth: 1024,
  //   width: "100%",
  //   height: "100%",
  //   // minHeight: 1000,
  //   position: "fixed",
  // },
  // [theme.breakpoints.between("sm", "md")]: {
  //   backgroundImage: `url(${BackgroundHomeSm})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundAttachment: "fixed",
  //   backgroundColor: "rgb(97,158,215)",
  //   // minWidth: 1024,
  //   width: "100%",
  //   height: "100%",
  //   // minHeight: 1000,
  //   position: "fixed",
  // },
  [theme.breakpoints.between("xs", "sm")]: {
    backgroundImage: `url(${BackgroundHomeSm})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "rgb(97,158,215)",
    // minWidth: 1024,
    width: "100%",
    height: "100%",
    // minHeight: 1000,
    // position: "fixed",
  },
  },


  name: {
    fontWeight: "bold",
    [theme.breakpoints.between("xs", "sm")]: {
      MuiTypography: {
        h4: {
          fontSize: "1.75rem",
        },
      },
    },

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
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Fade in="true" 
    // timeout={5000}
    >
    <div className={classes.backgroundHome}>
      
      <Container id="about" className={classes.root}>
        <Grid container justify="center">
        
          <Grid item>
          <Slide
              direction="down"
              in="true"
              // style={{ transitionDelay: "500ms" }}
              timeout={750}
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
        <Grid item xs={0} sm={4}></Grid>
          <Grid item xs={9} sm={4}>
          <Slide
              direction="right"
              in="true"
              style={{ transitionDelay: "1000ms" }}
              // timeout={1250}
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
    </Fade>
  );
}
