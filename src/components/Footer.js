import React, {
  //  useState 
  } from "react";
import contactInfo from "../utils/contactInfo";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
// import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
// import resume from "../assets/images/Dan_Weikart_Resume.pdf";
import Link from "@material-ui/core/Link";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  iconLink: {
    margin: "2rem",
  },
  container: {
    backgroundColor: "rgba(119, 119, 119, 0.5)",
  },
}));

export default function Footer() {
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
  //       // color: "#00FF00",
  //       // backgroundColor: "white",
  //       // boxShadow: "0 0 20px #00FF00",
  //       // texShadow: "0 0 5px #00FF00",
  //       // transition: "0.5s",
  //       // transform: "scale(1.5)",
  //       opacity: 0.5
  //     })
  //   : (hoverStyle = {
  //      opacity: 1 
  //     }
  //     );

  return (
    <div className={classes.container}>
      <Divider style={{ margin: "24px auto", width: "80%" }} />
      <Grid container justify={"center"} spacing={2}>
        <Grid item xs={12}>
          <Typography align={"center"}>© Copyright 2020 Dan Weikart</Typography>
        </Grid>
      </Grid>
      <Grid container justify={"center"} spacing={2}>
        <Grid item align={"center"} xs={12} sm={12} md={10} lg={6}>
          {contactInfo.map((infoItem, index) => (
            <Tooltip title={infoItem.pLabel} key={index}>
            <Link
            
              href={infoItem.href}
              target={infoItem.target}
              rel="noopener noreferrer"
            >
              
              <FontAwesomeIcon
                className={classes.iconLink}
                icon={infoItem.icon}
                aria-label={infoItem.ariaLabel}
                size="3x"
                color={infoItem.color}
                // onMouseEnter={hoverOn}
                // onMouseOut={hoverOff}
                // style={hoverStyle}
              ></FontAwesomeIcon>
              
            </Link>
            </Tooltip>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
