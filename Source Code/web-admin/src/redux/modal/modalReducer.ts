const INITIAL_STATE = {
  isOpen: false,
  title: "",
  message: "",
  confirm: false,
};

const authReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    // case IS_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    default:
      return state;
  }
};

export default authReducer;
