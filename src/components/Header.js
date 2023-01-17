import { Tabs, Tab, Typography } from '@mui/material';
import { Paths } from "../models/Routes"

function Header({tabValue}) {
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

  const indicatorStyle = {
    color: "white"
  }

  return (
    <>
      <Typography variant="h2" align="center" style={headerTitleStyle}>NOTACHANCE</Typography>
      <Tabs value={tabValue} centered TabIndicatorProps={{style: {backgroundColor: "white"}}}>
        <Tab value="/" label="Home" href={Paths.Home} style={tabTitleStyle}/>
        <Tab value="/photos" label="Photos" href={Paths.Photos} style={tabTitleStyle}/>
        <Tab value="/contact" label="Contact" href={Paths.Contact} style={tabTitleStyle}/>
      </Tabs>
    </>
  );
}

export default Header;
