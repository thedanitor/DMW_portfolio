import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import resume from "../assets/images/Dan_Weikart_Resume.pdf";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  iconLink: {
    margin: "5rem",
    color: "#FF0000",
  },
}));



export default function Footer() {
  // const [hover, setHover] = useState(false);
  const classes = useStyles();

  // const hoverOn = () => {
  //   setHover(true);
  // };

  // const hoverOff = () => {
  //   setHover(false);
  // };

  // let hoverStyle;
  // hover
  //   ? (hoverStyle = {
  //       color: "#00FF00",
  //       backgroundColor: "white",
  //       boxShadow: "0 0 20px #00FF00",
  //       texShadow: "0 0 5px #00FF00",
  //       transition: "0.5s",
  //       transform: "scale(1.5)",
  //     })
  //   : (hoverStyle = { color: "FF0000" });

  return (
    <div 
    // style={{ backgroundColor: "black" }}
    >
      <Divider style={{ margin: "24px auto", width: "80%" }} />
      <Grid container justify={"center"} spacing={2}>
        <Grid item xs={12}>
          <Typography align={"center"}>© Copyright 2020 Dan Weikart</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Link
            href="mailto: danmweikart@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              // onMouseEnter={hoverOn}
              // onMouseOut={hoverOff}
              // style={hoverStyle}
              className={classes.iconLink}
              icon={faEnvelopeOpenText}
              size="3x"
            />
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link
            href="https://github.com/thedanitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
            // onMouseEnter={hoverOn}
            // onMouseOut={hoverOff}
            // style={hoverStyle}
              className={classes.iconLink}
              icon={faGithub}
              size="3x"
            />
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link
            href="https://www.linkedin.com/in/dan-weikart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
            // onMouseEnter={hoverOn}
            // onMouseOut={hoverOff}
            // style={hoverStyle}
              className={classes.iconLink}
              icon={faLinkedin}
              size="3x"
            />
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link href={resume} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
            // onMouseEnter={hoverOn}
            // onMouseOut={hoverOff}
            // style={hoverStyle}
              className={classes.iconLink}
              icon={faFilePdf}
              size="3x"
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
