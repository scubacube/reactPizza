const initState = {
    sortBy: {
        type: 'rating',
        order: 'desc'
    },
    category: 0
}

export const filters = (state = initState, action) => {
    switch(action.type) {
      case "SET_SORT_BY": {
        return {...state, sortBy: action.payload}
      }
      case 'SET_CATEGORY': {
        return {...state, category: action.payload}
      }
      default: return state;
    }
}