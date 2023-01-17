import { ImageListItem } from "@mui/material";

function Photo({source}) {
  return (
    <ImageListItem key={source}>
      <img src={source} loading="lazy"/>
    </ImageListItem>
  );
}

export default Photo;
