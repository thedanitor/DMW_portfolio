import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // color: "#000",
    backgroundColor: "rgba(97,158,215,0.95)",
    border: "3px solid black",
  },
  media: {
    height: 300,
    width: 600,
  },
  cardActions: {
    justifyContent: "center",
  },
  cardContent: {
    // borderTop: "3px solid black",
  }
});

export default function ProjectModal({
  name,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
    handleClose,
  //   show,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageLarge} title={name} />
      <CardContent align={"center"} className={classes.cardContent}>
        <Typography gutterBottom variant="h4" component="h2" color="primary">
          {name}
        </Typography>
        <Typography variant="body2" color="primary" component="body2">
          {description}
        </Typography>
        <Typography variant="h6" color="primary" component="h6">
          Technologies Used:
        </Typography>
        <Typography variant="body2" color="primary" component="body2">
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
          className="btn"
        >
          View Website
        </Button>
        <Button
          size="small"
          color="secondary"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Github Repository
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={handleClose}
          className="btn"
        >
          Close
        </Button>
      </CardActions>
    </Card>
  );
}
