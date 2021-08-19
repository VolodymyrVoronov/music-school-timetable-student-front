import { ActionTypes } from "./action";

import { GET_TEACHERS, LOADING_TEACHERS, SET_TEACHER_ID, SET_CHOSEN_DATE, SET_TEACHERS_TIMETABLE } from "./actionTypes";

export interface TeacherType {
  firstName: string;
  secondName: string;
  _id: string;
}

interface TeachersReducerStateType {
  teachers: TeacherType[];
  loadingTeachers: boolean;
  teacherId: string;
  date: string;
}

const initialState = {
  teachers: [],
  loadingTeachers: false,
  teacherId: "",
  date: "",
};

const teachersReducer = (
  state: TeachersReducerStateType = initialState,
  action: ActionTypes
): TeachersReducerStateType => {
  switch (action.type) {
    case GET_TEACHERS: {
      return {
        ...state,
        teachers: action.payload.teachers,
      };
    }

    case LOADING_TEACHERS: {
      return {
        ...state,
        loadingTeachers: action.payload.loadingTeachers,
      };
    }

    case SET_TEACHER_ID: {
      return {
        ...state,
        teacherId: action.payload.teacherId,
      };
    }

    case SET_CHOSEN_DATE: {
      return {
        ...state,
        date: action.payload.date,
      };
    }

    default:
      return state;
  }
};

export default teachersReducer;
