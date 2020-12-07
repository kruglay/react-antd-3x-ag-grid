import Grid from "./Grid";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestRoute from "./TestRoute";

const App = (props) => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/some/ref/complex/1">complex</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Grid />
          </Route>
        </Switch>
        <Route path="*/ref" component={TestRoute}></Route>
      </div>
    </Router>
  );
};

export default App;
