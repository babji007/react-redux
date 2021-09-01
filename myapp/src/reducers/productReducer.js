
function productReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            state = state.concat(action.product);
            return state;
        case 'DELETE_PRODUCT':
            state = state.filter((product) => product.id !== action.id);
            return state;
        case 'FETCH_PRODUCT':
            return action.products;
        default:
            return state;
    }
}

export default productReducer;
