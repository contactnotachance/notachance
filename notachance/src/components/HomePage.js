import { useState, useEffect } from "react";
import ReactPlayer from 'react-player/vimeo'
import { Container, Grid } from "@mui/material"

function HomePage() {
  let divStyle = {padding:"56.25% 0 0 0", position:"relative"}
  let iframeStyle = {position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item>
          <ReactPlayer url='https://vimeo.com/582278789'/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
