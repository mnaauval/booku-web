import { combineReducers } from "redux";
import getCategoryReducer from "./bookReducer";

const appReducer = combineReducers({
  getCategoryReducer: getCategoryReducer,
});

export default appReducer;
