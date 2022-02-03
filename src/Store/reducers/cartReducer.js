const INITIAL_STATE = {
    carts: [],
    total: 0,
    quantity: 1
};
const cartReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                carts: [...state.carts,action.payload],
                total: state.total + action.payload.price
            };
        case "DELETE_ITEM":
            return {
                ...state,
                carts: state.carts.filter((product) => product.id !== action.payload.id),
                total: state.total - action.payload.price
            }
        case "INCREMENT":
            return {
                ...state,
                quantity: state.quantity + action.payload.quantity,
                total: state.total + action.payload.price,
            }
        case "DECREMENT":
            return {
                ...state,
                quantity: state.quantity - action.payload.quantity,
                total: state.total - action.payload.price
            }
        default:
            return state;
    }
};

export default cartReducer;
