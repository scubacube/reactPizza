const initState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => {
    return arr.reduce((sum, object) => object.price + sum, 0)
};

export const cart = (state = initState, action) => {

    switch (action.type) {
        case "ADD_PIZZA_CART": {
            const currentPizzaItems = !state.items[action.payload.id] //undefined?
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const items = Object.values(newItems).map(obj => {
                return obj.items;
            } );//Object.values(newItems) - получили тут массив объектов,
            // затем через мап получили массив с items

            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
              }
        }
        case "DELETE_PIZZA_CART": {

            const newItems = {
                ...state.items
            }

            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;

            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        case "MINUS_ITEM": {
            const oldItems = state.items[action.payload].items;
            const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

            const NewObjectItems = {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: getTotalPrice(newItems)
                }
            }

            const items = Object.values(NewObjectItems).map(obj => {
                return obj.items;
            });

            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: NewObjectItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            };
        }
        case "PLUS_ITEM": {
            const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]
            const NewObjectItems = {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: getTotalPrice(newItems)
                }
            }
            const items = Object.values(NewObjectItems).map(obj => {
                return obj.items;
            });

            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: NewObjectItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }
        }

        case "CLEAR_CART": {
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }
        }
        default:  return state;
    }
    return state;
}