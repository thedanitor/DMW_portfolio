import React
// , { useEffect, useState }
 from "react";
import Container from "@material-ui/core/Container";
import Project from "../components/Project";
import portfolioList from "../utils/portfolioList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import API from "../../utils/API";
// import CategorySelector from "../../components/CategorySelector";
// import Slide from "@material-ui/core/Slide";
// import SearchBar from "../../components/SearchBar";
// import ArrowButtons from "../../components/ArrowButtons";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

export default function Projects() {
    return (
        <Container>
        <div>
            <Grid container spacing={3}>
            {portfolioList.map((proj, index) => (
                <Grid item xl={3} key={index}>
                  {/* <Slide direction={slideDirection} in={slideIn}> */}
                    <Paper>
                    <Project
                      name={proj.name}
                      image={proj.image}
                      imageLarge={proj.imageLarge}
                      tech={proj.tech}
                      description={proj.description}
                      webUrl={proj.webUrl}
                      githubUrl={proj.githubUrl}
                      key={index}
                    />
                    </Paper>
                  {/* </Slide> */}
                </Grid>
              ))}

            </Grid>

        </div>
      </Container>
    )
}
