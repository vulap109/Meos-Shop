import {
  IS_LOADING,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from "./authAction";

const INITIAL_STATE = {
  user: {
    email: "",
    userName: "",
    auth: false,
    token: "",
  },
  isLoading: false,
  isLoginError: false,
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
        isLoginError: false,
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
        isLoginError: true,
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
        isLoginError: false,
        message: "",
      };

    default:
      return state;
  }
};

export default authReducer;
