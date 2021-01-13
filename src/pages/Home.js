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
import Fade from "@material-ui/core/Fade";
// import BackgroundHomeXl from "../assets/images/LakeMargaret_topWideFull.jpg";
// import BackgroundHomeLg from "../assets/images/LakeMargaret_top1920x1080comp.jpg";
// import BackgroundHomeMd from "../assets/images/LakeMargaret_top1280.jpg";
// import BackgroundHomeSm from "../assets/images/LakeMargaret_top960.jpg";
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
  backgroundHome: {
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
  nameText: {
    fontFamily: "Archivo Black",
    [theme.breakpoints.down(220)]: {
      fontSize: "2rem",
    },
  },
  stackText: {
    fontFamily: "Archivo Black",
    [theme.breakpoints.between(220, 300)]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down(220)]: {
      fontSize: "1rem",
    },
  },
  clearPaperName: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
    textAlign: "center",
    marginBottom: 20,
  },
  clearPaperStack: {
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
    <Fade
      in="true"
      timeout={500}
    >
      <div className={classes.backgroundHome}>
        <Container id="about" className={classes.root}>
          <Grid container justify="center">
            <Grid item sm={6}>
              <Slide
                direction="down"
                in="true"
                timeout={500}
              >
                <Paper className={classes.clearPaperName}>
                  <Typography
                    className={classes.nameText}
                    variant="h2"
                    color="secondary"
                  >
                    DAN WEIKART
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={1} sm={4}></Grid>
            <Grid item xs={9} sm={4}>
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
                style={{ transitionDelay: "1200ms" }}
              >
                <Paper className={classes.clearPaperStack}>
                  <Typography
                    className={classes.stackText}
                    variant="h4"
                    color="secondary"
                  >
                    Full
                  </Typography>
                </Paper>
              </Slide>
              <Slide
                direction="up"
                in="true"
                style={{ transitionDelay: "1400ms" }}
              >
                <Paper className={classes.clearPaperStack}>
                  <Typography
                    className={classes.stackText}
                    variant="h4"
                    color="secondary"
                  >
                    Stack
                  </Typography>
                </Paper>
              </Slide>
              <Slide
                direction="up"
                in="true"
                style={{ transitionDelay: "1600ms" }}
              >
                <Paper className={classes.clearPaperStack}>
                  <Typography
                    className={classes.stackText}
                    variant="h4"
                    color="secondary"
                  >
                    Web
                  </Typography>
                </Paper>
              </Slide>
              <Slide
                direction="up"
                in="true"
                style={{ transitionDelay: "1800ms" }}
              >
                <Paper className={classes.clearPaperStack}>
                  <Typography
                    className={classes.stackText}
                    variant="h4"
                    color="secondary"
                  >
                    Developer
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fade>
  );
}
