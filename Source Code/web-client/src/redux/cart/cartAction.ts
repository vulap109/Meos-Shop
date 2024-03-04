import { cartLocalStorage } from "../../config/constant";

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
export const CART_REFRESH = 'CART_REFRESH';

/*GET NUMBER CART*/
export const GetNumberCart = () => {
    return async (dispatch: DispatchType) => {
        dispatch({ type: "GET_NUMBER_CART" });
    }
}

// add product to cart
export const AddCart = (payload: ICart) => {
    return async (dispatch: DispatchType) => {
        dispatch({ type: "ADD_CART", payload });
    }
}
// export const UpdateCart=(payload){
//     return=> {
//         type:'UPDATE_CART',
//         payload
//     }
// }

// Delete product from cart
export const DeleteCart = (payload: number) => {
    return async (dispatch: DispatchType) => {
        dispatch({ type: "DELETE_CART", payload });
    }
}

// Increase quantity product in cart
export const IncreaseQuantity = (payload: number) => {
    return async (dispatch: DispatchType) => {
        dispatch({ type: "INCREASE_QUANTITY", payload });
    }
}

// Decrease quantity product in cart
export const DecreaseQuantity = (payload: number) => {
    return async (dispatch: DispatchType) => {
        dispatch({ type: "DECREASE_QUANTITY", payload });
    }
}

// check local storage to get cart list
export const cartRefresh = () => {
    return async (dispatch: DispatchType) => {
        const cartList = JSON.parse(localStorage.getItem(cartLocalStorage) || "{}");
        if (cartList.numberCart > 0 && cartList.carts && cartList.carts.length > 0) {
            dispatch({ type: "CART_REFRESH", payload: cartList });
        } else {
            localStorage.removeItem(cartLocalStorage);
        }
    }
}