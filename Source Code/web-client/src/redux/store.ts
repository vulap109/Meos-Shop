import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";
import modalReducer from "./modal/modalReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  authState: authReducer,
  modalState: modalReducer,
  cartState: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
