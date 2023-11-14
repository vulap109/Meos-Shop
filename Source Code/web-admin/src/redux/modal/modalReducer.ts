import { MODAL_CLOSE, MODAL_OPEN } from "./modalAction";

const INITIAL_STATE = {
  modalOpen: false,
  title: "",
  message: "",
  confirmation: false,
};

const modalReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
        message: action.payload.message,
        confirmation: action.payload.confirmation,
        handleSuccess: action.payload.handleSuccess,
        handleClose: action.payload.handleClose,
      };

    case MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false,
        message: "",
      };

    default:
      return state;
  }
};

export default modalReducer;
