import { Container, Grid } from "@mui/material";
import { Videos } from "../models/Videos.js";
import Film from "../components/Film.js"

function FilmPage() {
  let gridStyle = {padding: "50px 0"}

  return (
    <>
      <Grid container style={gridStyle} rowSpacing={12} columnSpacing={{ xs: 1, sm: 3 }} justifyContent="center" alignItems="stretch">
        { Videos.map((video) =>
          <Film video={video}/>
        )}
      </Grid>
    </>
  );
}

export default FilmPage;
