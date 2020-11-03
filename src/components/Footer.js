import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

// const useStyles = makeStyles(theme => ({
//   iconLink: {
//     margin: "5rem",
//     color: "#F7F7F7",
//   },
// }));

export default function Footer() {
    // const classes = useStyles();

  return (
    <div>
      <Divider style={{ margin: "24px auto", width: "80%" }} />
      <Grid container justify={"center"} spacing={2}>
        <Grid item xs={12}>
          <Typography align={"center"}>© Copyright 2020 Dan Weikart</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
            <Link
              href="https://github.com/cbragg9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="iconLink" icon={faEnvelopeOpenText} />
            </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Link
              href="https://github.com/jaredhennessy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="iconLink" icon={faGithub} />
            </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Link
              href="https://github.com/cristianmontenegrop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="iconLink" icon={faLinkedin} />
            </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Link
              href="https://github.com/thedanitor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </Link>
        </Grid>
      </Grid>
    </div>
  );
}
