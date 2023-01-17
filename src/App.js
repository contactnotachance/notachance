import React from "react";
import {
 BrowserRouter,
 Route,
 Switch,
} from "react-router-dom";

import FilmPage from "./pages/FilmPage"
import PhotoPage from "./pages/PhotoPage"
import ContactPage from "./pages/ContactPage"
import Header from "./components/Header"
import { Paths } from "./models/Routes"

function App() {
  const appStyle = {backgroundColor: "black"}
  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Header tabValue={window.location.pathname}/>
        <Switch>
          <Route exact path={Paths.Photos}>
            <PhotoPage/>
          </Route>
          <Route exact path={Paths.Contact}>
            <ContactPage/>
          </Route>
          <Route exact path={Paths.Home}>
            <FilmPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
