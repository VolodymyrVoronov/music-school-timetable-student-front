import { combineReducers } from "redux";

import teachersReducer from "./teacherReducer/teachersReducer";

const rootReducer = combineReducers({
  teachersReducer,
});

export default rootReducer;
