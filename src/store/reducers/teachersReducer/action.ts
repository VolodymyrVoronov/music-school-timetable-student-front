import { Dispatch, AnyAction } from "redux";

import { fetchTeachers } from "../../../api/api";

import { typedAction } from "../helpers";

import { TeacherType } from "./teachersReducer";

import { GET_TEACHERS, LOADING_TEACHERS } from "./actionTypes";

export const getTeachersAC = (teachers: TeacherType[]) => typedAction(GET_TEACHERS, { teachers });

export const loadingTeachersAC = (loadingTeachers: boolean) => typedAction(LOADING_TEACHERS, { loadingTeachers });

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

export type ActionTypes = ReturnType<typeof getTeachersAC | typeof loadingTeachersAC>;
