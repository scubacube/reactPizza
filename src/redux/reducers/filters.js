const initState = {
    sortBy: {
        type: 'rating',
        order: 'desc'
    },
    category: 0
}

export const filters = (state = initState, action) => {
    // debugger
    if (action.type === "SET_SORT_BY") {
        return {...state, sortBy: action.payload}
    }
    if (action.type === "SET_CATEGORY") {
        return {...state, category: action.payload}
    }
    return state;
}