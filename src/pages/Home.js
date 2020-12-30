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
    display: "block",
  },
  clearPaper: {
    backgroundColor: "rgba(0, 0, 0, 0)",
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
              direction="left"
              in="true"
              style={{ transitionDelay: "750ms" }}
            >
                <Paper className={classes.clearPaper}>
            <Typography className={classes.name} variant="h2" color="secondary">
              Dan Weikart
            </Typography>
            </Paper>
            </Slide>
          </Grid>
          
        </Grid>
        <Grid container justify="center">
       
          <Grid item md={6} lg={4}>
          <Slide
              direction="right"
              in="true"
              style={{ transitionDelay: "750ms" }}
            >
              <Card>
                <CardMedia
                  // className={classes.media}
                  image={DanPhoto}
                  component="img"
                  title="Dan Weikart"
                />
              </Card>
              </Slide>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
}
