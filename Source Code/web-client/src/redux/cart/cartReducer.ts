import { cartLocalStorage } from '../../config/constant';
import {
    GET_NUMBER_CART,
    ADD_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    DELETE_CART,
    CART_REFRESH
} from './cartAction';

const INITIAL_CART = {
    numberCart: 0,
    carts: []
}

const cartReducer = (state: CartState = INITIAL_CART, action: ActionType) => {
    switch (action.type) {
        case GET_NUMBER_CART:
            return {
                ...state,
            };

        case ADD_CART:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    productName: action.payload.productName,
                    image: action.payload.image,
                    price: action.payload.price,
                    discount: action.payload.discount
                }
                state.carts.push(cart);
            }
            else {
                let check = false;
                state.carts.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        productName: action.payload.productName,
                        image: action.payload.image,
                        price: action.payload.price,
                        discount: action.payload.discount
                    }
                    state.carts.push(_cart);
                }
            }

            // save cart to localStorage
            saveCart({ numberCart: state.numberCart + 1, carts: state.carts });

            return {
                ...state,
                numberCart: state.numberCart + 1
            }

        case INCREASE_QUANTITY:
            state.numberCart++
            state.carts[action.payload].quantity++;

            // save cart to localStorage
            saveCart(state);

            return {
                ...state
            }

        case DECREASE_QUANTITY:
            let quantity = state.carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.carts[action.payload].quantity--;
            }

            // save cart to localStorage
            saveCart(state);

            return {
                ...state
            }

        case DELETE_CART:
            let quantity_ = state.carts[action.payload].quantity;
            let cartList = state.carts.filter(item => {
                return item.id !== state.carts[action.payload].id
            });

            // save cart to localStorage
            saveCart({ numberCart: state.numberCart - quantity_, carts: cartList });

            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                carts: cartList
            }

        case CART_REFRESH:
            return {
                ...state,
                numberCart: action.payload.numberCart,
                carts: action.payload.carts
            }

        default:
            return state;
    }
};

const saveCart = (cartList: CartState) => {
    localStorage.setItem(cartLocalStorage, JSON.stringify(cartList));
}

export default cartReducer;