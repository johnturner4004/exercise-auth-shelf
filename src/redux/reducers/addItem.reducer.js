const addItemReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ADDING_ITEM' :
            return action.payload;
        default:
            return state;
    }
}

export default addItemReducer;