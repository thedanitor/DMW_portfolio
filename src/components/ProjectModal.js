import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(97,158,215,0.95)",
    border: "3px solid black",
    [theme.breakpoints.down(275)]: {
      padding: 1,
    },
  },
  media: {
    height: 300,
    width: 600,
    [theme.breakpoints.between(400, "xs")]: {
      maxWidth: 500,
      height: 200,
    },
    [theme.breakpoints.between(0, 400)]: {
      display: "none",
    },
  },
  cardActions: {
    justifyContent: "center",
    [theme.breakpoints.between(0, 400)]: {
      flexDirection: "column",
    },
  },
  cardContent: {
    [theme.breakpoints.between(0, 275)]: {
      padding: 1,
    },
  },
  titleText: {
    [theme.breakpoints.between(275, 325)]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.between(225, 275)]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.between(0, 225)]: {
      fontSize: "0.75rem",
    },
  },
  descriptionText: {
    [theme.breakpoints.between(0, 225)]: {
      fontSize: "0.75rem",
    },
  },
  technologiesText: {
    [theme.breakpoints.between(0, 275)]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.between(0, 225)]: {
      fontSize: "0.75rem",
    },
  },
  techText: {
    [theme.breakpoints.between(0, 225)]: {
      fontSize: "0.75rem",
    },
  },
  button: {
    textAlign: "center",
    [theme.breakpoints.between(0, 175)]: {
      fontSize: "0.5rem",
    },
  },
}));

export default function ProjectModal({
  name,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
  handleClose,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageLarge} title={name} />
      <CardContent align={"center"} className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h4"
          color="secondary"
          className={classes.titleText}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          className={classes.descriptionText}
        >
          {description}
        </Typography>
        <Typography
          variant="h6"
          color="secondary"
          className={classes.technologiesText}
        >
          Technologies Used:
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          className={classes.techText}
        >
          {tech}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.button}
        >
          View Website
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.button}
        >
          Github Repository
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={handleClose}
          className={classes.button}
        >
          Close
        </Button>
      </CardActions>
    </Card>
  );
}
