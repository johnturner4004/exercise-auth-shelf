const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default listReducer;