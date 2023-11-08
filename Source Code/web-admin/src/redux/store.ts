import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  authState: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
