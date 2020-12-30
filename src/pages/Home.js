import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Background from "../assets/images/LakeMargaret.jpg"


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        paddingTop: 200,
        paddingBottom: 200,
      },
    backgroundHome: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "rgb(97,158,215)",
        
        // minWidth: 1024,
        width: "100%",
        height: "auto",
        minHeight: 1000,
        // position: "fixed",
        // top: 0,
        // left: 0,
        marginTop: -100,
        // marginBottom: 0,
        // marginRight: 0,
        // marginLeft: 0,
        // minHeight: 937,
    },
  });

export default function Home() {


    const classes = useStyles();
    return (
        <div 
        className={classes.backgroundHome}
        >
            <h1 className={classes.root}>Home</h1>
        </div>
    )
}
