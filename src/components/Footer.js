import React from "react";
import contactInfo from "../utils/contactInfo";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  iconLink: {
    [theme.breakpoints.up("sm")]: {
      margin: "1rem 2rem",
    },
    [theme.breakpoints.between(300, "xs")]: {
      margin: "1rem 1rem",
    },
  },
  container: {
    backgroundColor: "rgba(119, 119, 119, 0.5)",
    [theme.breakpoints.up(300)]: {
      marginTop: -62.5,
    },
    [theme.breakpoints.between(0, 300)]: {
      display: "none",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container justify={"center"}>
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
                ></FontAwesomeIcon>
              </Link>
            </Tooltip>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
