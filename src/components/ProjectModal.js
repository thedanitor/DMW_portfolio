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
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  media: {
    height: 300,
    width: 600,
  },
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
      <CardContent align={"center"}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {tech}
        </Typography>
      </CardContent>
      <CardActions align={"center"}>
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
