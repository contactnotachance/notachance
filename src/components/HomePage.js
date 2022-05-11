import { useState, useEffect } from "react";
import Vimeo from '@u-wave/react-vimeo';
import { Container, Grid } from "@mui/material";
import { Videos } from "../models/Videos.js";

function HomePage() {
  let divStyle = {padding:"56.25% 0 0 0", position:"relative"}
  let iframeStyle = {width:"100%",height:"100%"}

  console.log(Videos);
  return (
    <Container maxWidth="lg">
      <Grid container columns={{ xs: 1, md: 2 }}>
        { Videos.map((video) =>
          <Grid item container>
            <Vimeo
              video={`https://vimeo.com/${video.id}`}
              autoplay
              muted
              style={iframeStyle}
              responsive
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default HomePage;
