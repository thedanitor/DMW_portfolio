import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  font: {
    [theme.breakpoints.down(300)]: {
      fontSize: "1rem",
    },
  },
  centerListItems: {
    justifyContent: "center",
    padding: 0,
  },
}));

export default function Skill({ skill }) {
  const classes = useStyles();
  return (
    <ListItem className={classes.centerListItems}>
      <Typography variant="h5" color="primary" className={classes.font}>
        {skill}
      </Typography>
    </ListItem>
  );
}
