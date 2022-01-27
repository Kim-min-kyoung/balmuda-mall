const INITIAL_STATE = []
const cartReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            return [
                ...state, action.payload
            ]// 불변성을 위해 ...state 을 해줌. 
        case "DELETE_ITEM":
            return state.filter((product) => product.id !== action.payload.id)
        case "INCREMENT":
            return state + action.payload
        case "DECREMENT":
            return state - action.payload
        case "SET_DIFF":
            return [...state, action.diff]
        default:
            return state;
    }
};

export default cartReducer;
