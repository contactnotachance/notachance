import Vimeo from '@u-wave/react-vimeo';
import { Grid } from "@mui/material";

function Film({video}) {
  let iframeStyle = {width:"100%",height:"100%", padding:"0"}

  return (
    <Grid item container xs={12} sm={6}>
      <Vimeo
        video={`https://vimeo.com/${video.id}`}
        autoplay
        muted
        style={iframeStyle}
        responsive
      />
    </Grid>
  );
}

export default Film;
