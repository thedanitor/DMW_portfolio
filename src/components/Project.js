import React, { useContext } from "react";
import ProjectModal from "./ProjectModal";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Zoom from "@material-ui/core/Zoom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 500,
  },

  // media: {
  //   height: 140,
  // },

  description: {
    height: 75,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "no-wrap",
  },

  title: {
    height: 60,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "no-wrap",
  },

  modal: {
    minWidth: 600,
  },
});

export default function Project({
  name,
  image,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
  key,
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {name}
          </Typography>
          <CardMedia
            className={classes.media}
            image={image}
            component="img"
            title={name}
          />
          <CardContent>
            {/* <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                {description}
              </Typography> */}
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen}>
              View Details
            </Button>
          </CardActions> */}
      </Card>

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id={name}>{name}</DialogTitle>
          <DialogContent>
            <ProjectModal
              name={name}
              imageLarge={imageLarge}
              tech={tech}
              description={description}
              webUrl={webUrl}
              githubUrl={githubUrl}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
