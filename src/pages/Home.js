import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Background from "../assets/images/OlympicCoastCropClear.jpg"


const useStyles = makeStyles({
    backgroundHome: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "auto",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        marginTop: 0,
        marginBottom: 0,
        // marginRight: "auto",
        // marginLeft: "auto",
        height: 700,
    }
  });

export default function Home() {


    const classes = useStyles();
    return (
        <div className={classes.backgroundHome}>
            <h1>Home</h1>
        </div>
    )
}
