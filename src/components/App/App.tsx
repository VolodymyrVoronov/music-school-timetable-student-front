import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import TeachersPage from "./../../pages/TeachersPage/TeachersPage";

const App = (): React.ReactElement => {
  return (
    <Switch>
      <Redirect exact path="/" to="teachers">
        <TeachersPage />
      </Redirect>

      <Route exact path="/teachers">
        <TeachersPage />
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
