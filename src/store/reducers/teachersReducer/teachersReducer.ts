import { ActionTypes } from "./action";

import { GET_TEACHERS, LOADING_TEACHERS, SET_TEACHER_ID, SET_CHOSEN_DATE, SET_TEACHERS_TIMETABLE } from "./actionTypes";

export interface TeacherType {
  firstName: string;
  secondName: string;
  _id: string;
}

export interface TimeTableType {
  _id: string;
  cardId: string;
  order: number;
  data: {
    lessonStart: string;
    lessonEnd: string;
    student: string;
  };
}

interface TeachersReducerStateType {
  teachers: TeacherType[];
  loadingTeachers: boolean;
  teacherId: string;
  date: string;
  timetable: TimeTableType[];
}

const initialState = {
  teachers: [],
  loadingTeachers: false,
  teacherId: "",
  date: "",
  timetable: [],
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

    case SET_TEACHERS_TIMETABLE: {
      return {
        ...state,
        timetable: action.payload as any,
      };
    }

    default:
      return state;
  }
};

export default teachersReducer;
