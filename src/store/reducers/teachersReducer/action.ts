import { Dispatch, AnyAction } from "redux";

import { fetchTeachers, fetchTimetable } from "../../../api/api";

import { typedAction } from "../helpers";

import { TeacherType } from "./teachersReducer";

import { GET_TEACHERS, LOADING_TEACHERS, SET_TEACHER_ID, SET_CHOSEN_DATE, SET_TEACHERS_TIMETABLE } from "./actionTypes";

export const getTeachersAC = (teachers: TeacherType[]) => typedAction(GET_TEACHERS, { teachers });

export const loadingTeachersAC = (loadingTeachers: boolean) => typedAction(LOADING_TEACHERS, { loadingTeachers });

export const setTeacherIdAC = (teacherId: string) => typedAction(SET_TEACHER_ID, { teacherId });

export const setChosenDateAC = (date: string) => typedAction(SET_CHOSEN_DATE, { date });

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
    const data = { teacherId, date };

    const response = await fetchTimetable(data);
    console.log(response);
  } catch (error) {}
};

export type ActionTypes = ReturnType<
  typeof getTeachersAC | typeof loadingTeachersAC | typeof setTeacherIdAC | typeof setChosenDateAC
>;
