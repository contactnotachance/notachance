import { Container, ImageList } from "@mui/material";
import { Photos } from "../models/Photos.js";
import Photo from "../components/Photo.js"

function PhotoPage() {
  return (
    <ImageList variant="masonry" cols={2} gap={8}>
    { Photos.map((photoSource) =>
      <Photo source={photoSource}/>
    )}
    </ImageList>
  );
}

export default PhotoPage;
