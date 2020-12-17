import Grid from "./Grid";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestRoute from "./TestRoute";
import {Button} from 'antd';
import {Button as InvButton} from './uiKit/Button';
import {Select} from './uiKit/Select';

import {optchildren} from './TestRoute';

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

        <div>
          <Button type="primary">ANT button</Button>
          <br/>
          <br/>
          <InvButton type="primary">INV button</InvButton>
          <br/>
          <br/>
          <Switch defaultChecked  />
          <br/>
          <Select
            mode="multiple"
            style={{ width: 300 }}
            placeholder="Please select"
          >
            {optchildren}
          </Select>
        </div>

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
