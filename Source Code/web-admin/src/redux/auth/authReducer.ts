import {
  IS_LOADING,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_ERROR,
} from "./authAction";

const INITIAL_STATE = {
  user: {
    email: "",
    userName: "",
    auth: false,
    token: "",
  },
  isLoading: true,
  isError: false,
  message: "",
};

const authReducer = (state: AuthState = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: {
          email: action.payload.email,
          userName: action.payload.userName,
          auth: true,
          token: action.payload.token,
        },
        isLoading: false,
        isError: false,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        user: {
          email: "",
          userName: "",
          auth: false,
          token: "",
        },
        isLoading: false,
        isError: true,
        message: action.payload.message,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: {
          email: "",
          userName: "",
          auth: false,
          token: "",
        },
        isLoading: false,
        isError: false,
        message: "",
      };
    case SIGN_OUT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default authReducer;
