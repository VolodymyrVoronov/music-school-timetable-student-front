import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../store/store";

import { fetchTeachersTimetable } from "./../../store/reducers/teachersReducer/action";

import TimetableCards from "./../TimetableCards/TimetableCards";
import BackButton from "./../common/UI/BackButton/BackButton";

const Timetable = (): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { teacherId, date } = useSelector((state: RootState) => state.teachersReducer);

  React.useEffect(() => {
    dispatch(fetchTeachersTimetable(teacherId, date));
  }, []);

  if (!teacherId && !date) {
    history.push("/teachers");
  }

  return (
    <>
      <BackButton path="/calendar" />
      <TimetableCards />
    </>
  );
};

export default Timetable;
