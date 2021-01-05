import React, {
  //  useState 
  } from "react";
import contactInfo from "../utils/contactInfo";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
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
    [theme.breakpoints.up("sm")]: {
      margin: "1rem 2rem",
    },
    [theme.breakpoints.between(300, "xs")]: {
      margin: "1rem 1rem",
    },
    // [theme.breakpoints.between(262, 300)]: {
    //   margin: "1rem 3rem",
    // },
    // [theme.breakpoints.between(0, 262)]: {
    //   margin: "1rem 4rem",
    // },
    // [theme.breakpoints.between(0, 300)]: {
    //   // marginTop: -307.5,
    //   // marginTop: 0,
    //   height: 0,
    //   hidden: true,
    //   padding: 0
    // },
  },
  container: {
    backgroundColor: "rgba(119, 119, 119, 0.5)",
    [theme.breakpoints.up(300)]: {
      marginTop: -61.5,
    },    
    // [theme.breakpoints.between(262, 300)]: {
    //   marginTop: -184.5,
    // },
    // [theme.breakpoints.between(0, 262)]: {
    //   marginTop: -307.5,
    // },
    [theme.breakpoints.between(0, 300)]: {
      display: "none",
    },

    // width: "100%",
    // position: "fixed",
    // bottom: 0,
    // left: 0,
    // right: 0,
    // margin: 0,
    // padding: 0,
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
      {/* <Divider style={{ margin: "24px auto", width: "80%" }} /> */}
      {/* <Grid container justify={"center"} spacing={2}>
        <Grid item xs={12}>
          <Typography align={"center"}>© Copyright 2020 Dan Weikart</Typography>
        </Grid>
      </Grid> */}
      <Grid container justify={"center"} 
      // spacing={2}
      >
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
                size="2x"
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
