export const addPizzaToCart = (obj) => {
    return {
        type: "ADD_PIZZA_CART",
        payload: obj
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}

export const deletePizza = (id) => {
    return {
        type: "DELETE_PIZZA_CART",
        payload: id
    }
}

export const minusItem = (id) => {
    return {
        type: "MINUS_ITEM",
        payload: id
    }
}

export const plusItem = (id) => {
    return {
        type: "PLUS_ITEM",
        payload: id
    }
}