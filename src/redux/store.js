import { applyMiddleware, createStore } from "redux";
import appReducer from "./reducers/index";
import thunk from "redux-thunk";
// import logger from "redux-logger";

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const middleware = applyMiddleware(thunk); //, logger);
const store = createStore(rootReducer, middleware);

export default store;
