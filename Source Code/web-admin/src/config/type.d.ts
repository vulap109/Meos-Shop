interface IUser {
  email: string;
  userName: string;
  auth: boolean;
  token: string;
}

type AuthState = {
  user: IUser;
  isLoading: boolean;
  isError: boolean;
  message: string;
};

type ActionType = {
  type: string;
  payload?: any;
};

type DispatchType = (args: ActionType) => ActionType;

type state = {
  authState: AuthState;
};
