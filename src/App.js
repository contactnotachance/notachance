import React from "react";
import {
 HashRouter,
 Route,
 Switch,
} from "react-router-dom";
import { Container } from "@mui/material"
import FilmPage from "./pages/FilmPage"
import PhotoPage from "./pages/PhotoPage"
import ContactPage from "./pages/ContactPage"
import Header from "./components/Header"
import { Paths } from "./models/Routes"

function App() {
  const appStyle = {
    backgroundColor: "black",
    fontFamily: "Avenir Next",
    fontWeight: "bold",
    alignContent: "center",
    color: "white",
  }

  return (
    <Container maxWidth="xl" style={appStyle}>
      <HashRouter>
        <Header/>
        <Switch>
          <Route exact strict path={Paths.Photos}>
            <PhotoPage/>
          </Route>
          <Route exact strict path={Paths.Contact}>
            <ContactPage/>
          </Route>
          <Route exact strict path={Paths.Home}>
            <FilmPage/>
          </Route>
        </Switch>
      </HashRouter>
    </Container>
  );
}

export default App;
