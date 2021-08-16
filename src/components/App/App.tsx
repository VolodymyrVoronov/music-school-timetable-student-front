import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <Switch>
      <Redirect exact path="/" to="teachers">
        <p>Teachers</p>
      </Redirect>

      <Route exact path="/teachers">
        <p>Teachers</p>
      </Route>

      <Route exact path="/calendar">
        <p>Calender</p>
      </Route>

      <Route exact path="/timetable">
        <p>timetable</p>
      </Route>
    </Switch>
  );
};

export default App;
