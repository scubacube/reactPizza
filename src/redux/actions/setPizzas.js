import axios from "axios";

export const setLoaded = (value) => {
    return {
        type: "SET_LOADED",
        payload: value
    }
}

export const setPizzas = (items) => {
    return {
        type: "SET_PIZZAS",
        payload: items
    }
}

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${category!==0?`category=${category}`:""}&_sort=${sortBy.type}&_order=desc`)
        .then(res => {
            dispatch(setLoaded(true));
            dispatch(setPizzas(res.data));
        }).catch(err => console.log(err));
}

