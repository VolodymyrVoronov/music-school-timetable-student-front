import { ActionTypes } from "./action";

import { GET_TEACHERS, LOADING_TEACHERS } from "./actionTypes";

export interface TeacherType {
  firstName: string;
  secondName: string;
  _id: string;
}

interface TeachersReducerStateType {
  teachers: TeacherType[];
  loadingTeachers: boolean;
}

const initialState = {
  teachers: [],
  loadingTeachers: false,
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

    default:
      return state;
  }
};

export default teachersReducer;
