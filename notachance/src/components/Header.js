import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Typography } from '@mui/material';

import { Paths } from "../models/Routes"

function Header() {
  const [tabSelected, setTabSelected] = React.useState(0);

    const handleTabChange = (event, newValue) => {
      setTabSelected(newValue);
    };

    return (
      <>
        <Tabs value={tabSelected} onChange={handleTabChange} centered>
          <Tab label="Home" href={Paths.Home}/>
          <Tab label="Photos" href={Paths.Photos}/>
          <Tab label="Contact" href={Paths.Contact}/>
        </Tabs>
        <Typography variant="h2" align="center">NOTACHANCE</Typography>
      </>
    );
}

export default Header;
