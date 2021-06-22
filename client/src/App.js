import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchPage from "./pages/search.js";
import SavePage from "./pages/save.js";

// This is an SPA application with two views
// react-router-dom is used to switch views and display the correct components

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path={["/", "/search"]}>
          <SearchPage />
        </Route>

        <Route exact path="/saved">
          <SavePage />
        </Route>

      </Switch>

  </Router>
  );
}

export default App;