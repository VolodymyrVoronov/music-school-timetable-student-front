import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import TeachersPage from "./../../pages/TeachersPage/TeachersPage";
import CalendarPage from "./../../pages/CalendarPage/CalendarPage";
import TimetablePage from "./../../pages/TimetablePage/TimetablePage";

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
        <CalendarPage />
      </Route>

      <Route exact path="/timetable">
        <TimetablePage />
      </Route>
    </Switch>
  );
};

export default App;
