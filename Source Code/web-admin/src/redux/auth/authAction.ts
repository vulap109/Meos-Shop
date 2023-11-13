import { signinUser, signoutUser } from "../../service/authService";

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_OUT_ERROR = "SIGN_OUT_ERROR";
export const USER_REFRESH = "USER_REFRESH";
export const IS_LOADING = "IS_LOADING";

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
      // if (res && res.status === 400) {
      //     toast.error(res.data.error);
      // }
      dispatch({ type: "SIGN_IN_ERROR", payload: { message: data.message } });
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
      dispatch({ type: "SIGN_IN_ERROR", payload: { message: data.message } });
    }
  };
};
