type ActionType = {
  type: string;
  payload?: any;
};

type DispatchType = (args: ActionType) => ActionType;

interface IUser {
  email: string;
  userName: string;
  auth: boolean;
  token: string;
}

type AuthState = {
  user: IUser;
  isLoading: boolean;
};

type ModalState = {
  modalOpen: boolean;
  title: string;
  message: string;
  confirmation: boolean;
  handleSuccess: () => void;
  handleClose: () => void;
};

type state = {
  authState: AuthState;
  modalState: ModalState;
};