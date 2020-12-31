import React
// , { useEffect, useState }
 from "react";
import Container from "@material-ui/core/Container";
import Project from "../components/Project";
import portfolioList from "../utils/portfolioList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import API from "../../utils/API";
// import CategorySelector from "../../components/CategorySelector";
import Slide from "@material-ui/core/Slide";
// import ArrowButtons from "../../components/ArrowButtons";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import BackgroundProjects from "../assets/images/LakeMargaret_center.jpg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 200,
    paddingBottom: 200,
  },
  clearPaper: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
  },
  backgroundProjects: {
    backgroundImage: `url(${BackgroundProjects})`,
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
    // marginBottom: 0,
    // marginRight: 0,
    // marginLeft: 0,
    // minHeight: 937,
},
});

export default function Projects() {

  const classes = useStyles();

  // const [hover, setHover] = useState(false);

  // const hoverOn = () => {
  //   setHover(true);
  // };

  // const hoverOff = () => {
  //   setHover(false);
  // };

  // let hoverStyle;
  // hover
  //   ? (hoverStyle = {
  //     opacity: 0.5,
  //       // color: "#00FF00",
  //       // backgroundColor: "white",
  //       // boxShadow: "0 0 20px #00FF00",
  //       // texShadow: "0 0 5px #00FF00",
  //       transition: "0.5s",
  //       // transform: "scale(0.5)",
  //     })
  //   : (hoverStyle = { 
  //     opacity: 1,
  //     // color: "FF0000" 
  //   });




    return (
      <div className={classes.backgroundProjects}>
        <Container id="projects" className={classes.root}>
        <Typography
            gutterBottom
            variant="h2"
            component="h2"
            className="project-title"
          >
            My Projects
          </Typography>
            <Grid container justify={"center"} spacing={5}>
            {portfolioList.map((proj, index) => (
                <Grid item md={6} lg={4} key={index}>
                  <Slide direction="up" in="true" style={{ transitionDelay: '500ms'}}>
                    <Paper
                    className={classes.clearPaper}
                    >
                    <Project
                      name={proj.name}
                      image={proj.image}
                      imageLarge={proj.imageLarge}
                      tech={proj.tech}
                      description={proj.description}
                      webUrl={proj.webUrl}
                      githubUrl={proj.githubUrl}
                      key={index}
                    />
                    </Paper>
                  </Slide>
                </Grid>
              ))}
            </Grid>
      </Container>
      </div>
    )
}
