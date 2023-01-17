import { Container, ImageList } from "@mui/material";
import { Photos } from "../models/Photos.js";
import Photo from "../components/Photo.js"

function PhotoPage() {
  return (
    <Container maxWidth="xl">
      <ImageList variant="masonry" cols={2} gap={8}>
      { Photos.map((photoSource) =>
        <Photo source={photoSource}/>
      )}
      </ImageList>
    </Container>
  );
}

export default PhotoPage;
