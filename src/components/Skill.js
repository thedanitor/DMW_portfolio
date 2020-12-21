import React from 'react'
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import Slide from "@material-ui/core/Slide";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function Skill({
    skill
}) {
    return (
        <List>
    <ListItem>
        {skill}
    </ListItem>
        </List>
    )
}
