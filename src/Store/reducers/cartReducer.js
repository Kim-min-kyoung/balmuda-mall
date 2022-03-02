const INITIAL_STATE = {
    carts: [],
    total: 0,
    // quantity: 1
};
const cartReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            const cartitem = state.carts.find((product) => product.id === action.payload);
            if(cartitem) {
                cartitem.quantity += action.payload.quantity;
            }
            else {
                const addCartProduct = {
                    id: action.payload.id,
                    imageUrl: action.payload.imageUrl,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1
                };
                state.carts.push(addCartProduct);
            }
            return {
                ...state,
                carts: [...state.carts],
                total: state.total + action.payload.price
            }
            // return {
            //     ...state,
            //     carts: [...state.carts,action.payload],
            //     total: state.total + action.payload.price
            // };
        case "DELETE_ITEM":
            return {
                ...state,
                carts: state.carts.filter((product) => product.id !== action.payload.id),
                total: state.total - (action.payload.price * action.payload.quantity)
            }
            // return {
            //     ...state,
            //     carts: state.carts.filter((product) => product.id !== action.payload.id),
            //     total: state.total - action.payload.price
            // }
        case "INCREMENT":
            const plus = state.carts.find((product) => product.id === action.payload.id);
            if (plus) {
                plus.quantity += 1;
            }
            return {
                ...state,
                carts: [...state.carts],
                total: state.total + action.payload.price
            }
            // return {
            //     ...state,
            //     quantity: state.quantity + action.payload.quantity,
            //     total: state.total + action.payload.price,
            // }
        case "DECREMENT":
            const minus = state.carts.find((product) => product.id === action.payload.id);
            if (minus && minus.quantity > 1 ) {
                minus.quantity -= 1;
                return {
                    ...state,
                    carts: [...state.carts],
                    total: state.total - action.payload.price
                }
            }
            else {
                return {
                    ...state,
                    carts: [...state.carts],
                    total: state.total
                }
            }
            // return {
            //     ...state,
            //     quantity: state.quantity - action.payload.quantity,
            //     total: state.total - action.payload.price
            // }
        default:
            return state;
    }
};

export default cartReducer;
