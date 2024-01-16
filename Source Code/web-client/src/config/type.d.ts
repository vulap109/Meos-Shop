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

interface IProduct {
  id: number;
  images: string;
  description: string;
  productName: string;
  price: string;
  properties: string;
  categoryId: number;
  discount: number;
  label: string;
  information: string;
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

type propertiesType = {
  nameProp: string;
  option: string[];
}

interface IProductItem {
  Product: IProduct;
  productId: number;
  sumcol: number;
}

type breadcrumbProps = {
  url: string;
  titleName: string;
}