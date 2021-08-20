import { Dispatch, AnyAction } from "redux";

import { fetchTeachers, fetchTimetable } from "../../../api/api";

import { typedAction } from "../helpers";

import { TeacherType, TimeTableType } from "./teachersReducer";

import {
  GET_TEACHERS,
  LOADING_TEACHERS,
  SET_TEACHER_ID,
  SET_CHOSEN_DATE,
  SET_TEACHERS_TIMETABLE,
  LOADING_TIMETABLE,
} from "./actionTypes";

export const getTeachersAC = (teachers: TeacherType[]) => typedAction(GET_TEACHERS, { teachers });

export const loadingTeachersAC = (loadingTeachers: boolean) => typedAction(LOADING_TEACHERS, { loadingTeachers });

export const setTeacherIdAC = (teacherId: string) => typedAction(SET_TEACHER_ID, { teacherId });

export const setChosenDateAC = (date: string) => typedAction(SET_CHOSEN_DATE, { date });

export const setTeachersTimetableAC = (timetable: TimeTableType[]) =>
  typedAction(SET_TEACHERS_TIMETABLE, { timetable });

export const loadingTimetableAC = (loadingTimetable: boolean) => typedAction(LOADING_TIMETABLE, { loadingTimetable });

export const getTechers = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(loadingTeachersAC(true));
    const response = await fetchTeachers();
    if (response.status === 200) {
      const teachersData = response.data.map((d: { firstName: string; secondName: string; _id: string }) => {
        return {
          firstName: d.firstName,
          secondName: d.secondName,
          _id: d._id,
        };
      });

      dispatch(getTeachersAC(teachersData));
      dispatch(loadingTeachersAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(loadingTeachersAC(false));
  }
};

export const fetchTeachersTimetable = (teacherId: string, date: string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(loadingTimetableAC(true));
    const data = { teacherId, date };

    const response = await fetchTimetable(data);
    if (response.status === 200) {
      if (response.data.length !== 0) {
        dispatch(setTeachersTimetableAC(response.data[0].cards));
      } else {
        dispatch(setTeachersTimetableAC([]));
      }
      dispatch(loadingTimetableAC(false));
    }
  } catch (error) {
    console.log(error);
    dispatch(loadingTimetableAC(false));
  }
};

export type ActionTypes = ReturnType<
  | typeof getTeachersAC
  | typeof loadingTeachersAC
  | typeof setTeacherIdAC
  | typeof setChosenDateAC
  | typeof setTeachersTimetableAC
  | typeof loadingTimetableAC
>;
