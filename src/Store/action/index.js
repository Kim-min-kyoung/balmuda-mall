export const addCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    };
}
export const deleteCart = (product) => {
    return {
        type: "DELETE_ITEM",
        payload: product
    };
}
export const increment = (product) => {
    return {
        type: 'INCREMENT',
        payload: product
    };
}
export const decrement = (product) => {
    return {
        type: 'DECREMENT',
        payload: product
    };
}