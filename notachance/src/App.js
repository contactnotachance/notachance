import React from "react";
import {
 BrowserRouter,
 Route,
 Switch,
} from "react-router-dom";

import HomePage from "./components/HomePage"
import PhotoPage from "./components/PhotoPage"
import ContactPage from "./components/ContactPage"
import Header from "./components/Header"
import { Paths } from "./models/Routes"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Paths.Photos}>
          <PhotoPage/>
        </Route>
        <Route exact path={Paths.Contact}>
          <ContactPage/>
        </Route>
        <Route exact path={Paths.Home}>
          <HomePage/>
        </Route>
      </Switch>
      <Header/>
    </BrowserRouter>
  );
}

export default App;
