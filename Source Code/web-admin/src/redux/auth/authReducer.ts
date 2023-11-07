const INITIAL_STATE = {
  account: {
    email: "",
    userName: "",
    auth: false,
    token: "",
  },
  isLoading: false,
  isLoginError: false,
};

const authReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    // case value:

    //   break;

    default:
      return state;
  }
};

export default authReducer;
