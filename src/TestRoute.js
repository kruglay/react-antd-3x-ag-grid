import React from "react";
import { Drawer } from "antd";
import { Route, Link } from "react-router-dom";

import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

const Line = (props) => {
  console.log("line", props);
  return (
    <Drawer
      title="Line Drawer"
      placement="right"
      closable
      visible
      onClose={() => props.history.push("/")}
    >
      <div>
        <h2>{props.match.params.lineId}</h2>
        <Link to={`${props.location.pathname}/line/2`}>line №2</Link>
        <br />
        <Link to={`${props.location.pathname}/complex/1`}>complex №1</Link>
      </div>
    </Drawer>
  );
};

const Complex = (props) => {
  console.log("complex", props);
  return (
    <Drawer
      title="Complex Drawer"
      placement="right"
      closable
      visible
      onClose={() => props.history.push("/")}
    >
      <div>
        <h2>{props.match.params.complexId}</h2>
        <Link to={`${props.location.pathname}/line/1`}>line №1</Link>
        <br />
        <Link to={`${props.location.pathname}/complex/2`}>complex №2</Link>
      </div>
    </Drawer>
  );
};

const TestRoute = (props) => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  // debugger;
  // const useRouteMatch = useRouteMatch();

  console.log(history, location, params);
  return (
    <div className="test-route">
      <div>{"TestRoute"} </div>
      <div>
        <Route exact path="*/line/:lineId" component={Line} />
        <Route exact path="*/complex/:complexId" component={Complex} />
      </div>
    </div>
  );
};

export default TestRoute;
