import React from "react";
import { Drawer, Button, Switch, Select } from "antd";
import { Route, Link } from "react-router-dom";
import {Button as InvButton} from './uiKit/Button';
import antdCustom from './antd.module.scss';

import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

const {Option} = Select;
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

export const optchildren = [];
for (let i = 10; i < 36; i++) {
  optchildren.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const Complex = (props) => {
  console.log("complex", props);
  return (
    <Drawer
      title="Complex Drawer"
      placement="right"
      closable
      visible
      width={400}
      onClose={() => props.history.push("/")}
    >
      <div>
        <h2>{props.match.params.complexId}</h2>
        <Link to={`${props.location.pathname}/line/1`}>line №1</Link>
        <br />
        <Link to={`${props.location.pathname}/complex/2`}>complex №2</Link>
        <br/>
        <br/>

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
