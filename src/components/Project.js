import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Zoom from "@material-ui/core/Zoom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    maxHeight: 500,
    border: "3px solid black",
    margin: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  description: {
    height: 75,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "no-wrap",
  },

  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "no-wrap",
    justifyContent: "center",
  },

  modal: {
    border: "3px solid black",
    [theme.breakpoints.between(0, 300)]: {
      padding: 1,
    },
  },
  dialogContent: {
    [theme.breakpoints.between(0, 300)]: {
      padding: 1,
    },
  },
}));

export default function Project({
  name,
  image,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [hover, setHover] = useState(false);

  const hoverOn = () => {
    setHover(true);
  };

  const hoverOff = () => {
    setHover(false);
  };

  let hoverStyle;
  hover
    ? (hoverStyle = {
        opacity: 0.75,
      })
    : (hoverStyle = {
        opacity: 1,
      });

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            className={classes.media}
            image={image}
            component="img"
            title={name}
            onMouseEnter={hoverOn}
            onMouseOut={hoverOff}
            style={hoverStyle}
          />
        </CardActionArea>
      </Card>

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby={name}
          aria-describedby={description}
          PaperComponent="Paper"
          className={classes.modal}
        >
          <DialogContent className={classes.dialogContent}>
            <ProjectModal
              name={name}
              imageLarge={imageLarge}
              tech={tech}
              description={description}
              webUrl={webUrl}
              githubUrl={githubUrl}
              handleClose={handleClose}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
