import React, { 
  // useContext, 
  useState } from "react";
import ProjectModal from "./ProjectModal";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import Zoom from "@material-ui/core/Zoom";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Zoom ref={ref} {...props} />;
// });

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 500,
    border: "3px solid black",
    backgroundColor: "rgba(0, 0, 0, 0)",
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
    backgroundColor: "rgba(0, 0, 0, 0)",
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
        // color: "#00FF00",
        // backgroundColor: "black",
        // boxShadow: "0 0 20px #00FF00",
        // texShadow: "0 0 5px #00FF00",
        // transition: "0.5s",
        // transform: "scale(0.75)",
      })
    : (hoverStyle = { 
      opacity: 1,
      // color: "FF0000" 
    });




  return (
    <div>
      <Card className={classes.root}
      // onMouseEnter={hoverOn}
      // onMouseOut={hoverOff}
      // style={hoverStyle}
      >
        <CardActionArea onClick={handleClickOpen}>
          {/* <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {name}
          </Typography> */}
          <CardMedia
            className={classes.media}
            image={image}
            component="img"
            title={name}
            onMouseEnter={hoverOn}
            onMouseOut={hoverOff}
            style={hoverStyle}
          />
          {/* <CardContent>
            <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                {description}
              </Typography>
          </CardContent> */}
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
          // TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          
        >
          <DialogTitle id={name}>{name}</DialogTitle>
          <DialogContent
          //  className={classes.modal}
          >
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
