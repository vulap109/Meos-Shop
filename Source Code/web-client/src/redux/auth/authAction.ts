import { signinUser, signoutUser } from "../../service/authService";

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_OUT_ERROR = "SIGN_OUT_ERROR";
export const IS_LOADING = "IS_LOADING";
export const LOADING_STOP = "LOADING_STOP";

export const signInAction = (account: string, password: string) => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: "IS_LOADING" });
    let { data } = await signinUser({ account, password });
    if (data && data.access_token) {
      dispatch({
        type: "SIGN_IN_SUCCESS",
        payload: {
          email: data.email,
          token: data.access_token,
          userName: data.userName,
        },
      });
    } else {
      dispatch({ type: "SIGN_IN_ERROR" });
      // dispatch({ type: "MODAL_CLOSE" });
    }
  };
};

export const signOutAction = () => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: "IS_LOADING" });
    let { data } = await signoutUser();
    console.log("check log out ", data);

    if (data && data.result) {
      dispatch({
        type: "SIGN_OUT",
      });
    } else {
      dispatch({ type: "LOADING_STOP" });
      dispatch({
        type: "MODAL_OPEN",
        payload: {
          message: data.message,
          confirmation: false,
          handleClose: () => dispatch({ type: "MODAL_CLOSE" }),
          handleSucces: () => {},
        },
      });
    }
  };
};
