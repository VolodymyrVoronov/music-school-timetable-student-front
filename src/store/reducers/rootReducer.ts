import { combineReducers } from "redux";

import teachersReducer from "./teachersReducer/teachersReducer";

const rootReducer = combineReducers({
  teachersReducer,
});

export default rootReducer;
