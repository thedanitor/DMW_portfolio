import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {},
    media: {
      height: 300,
      width: 600
    }
  });

export default function ProjectModal({
    name,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
//   handleClose,
//   show,
}) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageLarge}
            title={name}
          />
          <CardContent>
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
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn">
            View Website
          </Button>
          <Button size="small" color="primary" href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn">
            Github Repository
          </Button>
        </CardActions>
      </Card>
    );
    }