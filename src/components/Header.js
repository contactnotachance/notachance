import { Tabs, Tab, Typography } from '@mui/material';
import { Paths } from "../models/Routes"

function Header() {
  const headerTitleStyle = {
    fontStyle: "italic",
    fontFamily: "Avenir Next",
    fontWeight: "bold",
    alignContent: "center",
    color: "white",
  }

  const tabTitleStyle = {
    color: "white",
    fontFamily: "Avenir Next",
    fontWeight: "bold",
  }

  return (
    <>
      <Typography variant="h3" align="center" style={headerTitleStyle}>NOTACHANCE</Typography>
      <Tabs centered>
        <Tab label="Home" href="/" style={tabTitleStyle}/>
        <Tab label="Photos" href="#/photos" style={tabTitleStyle}/>
        <Tab label="Contact" href="#/contact" style={tabTitleStyle}/>
      </Tabs>
    </>
  );
}

export default Header;
