import {
    GET_NUMBER_CART,
    ADD_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    DELETE_CART
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
            return {
                ...state,
                numberCart: state.numberCart + 1
            }

        default:
            return state;
    }
};

export default cartReducer;