import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchPage from "./pages/search.js";
import SavePage from "./pages/save.js";
import PageNotFound from "./pages/404.js"
import Footer from "./components/Footer";

// This is an SPA application with two views
// react-router-dom is used to switch views and display the correct components

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path={["/", "/search"]}>
          <SearchPage />
          <Footer />
        </Route>

        <Route exact path="/saved">
          <SavePage />
          <Footer />
        </Route>

        <Route component={PageNotFound}></Route>

      </Switch>

  </Router>
  );
}

export default App;