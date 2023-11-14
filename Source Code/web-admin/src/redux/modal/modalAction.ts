export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

export const openModalAction = (
  message: string,
  handleClose: () => void,
  confirmation: boolean = false,
  handleSuccess?: () => void
) => {
  return async (dispatch: DispatchType) => {
    dispatch({
      type: "MODAL_OPEN",
      payload: { message, confirmation, handleSuccess, handleClose },
    });
  };
};

export const closeModalAction = () => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: "MODAL_CLOSE" });
  };
};
