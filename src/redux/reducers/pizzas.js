import {setPizzas} from "../actions/setPizzas"
import {act} from "@testing-library/react";
// import {useDispatch} from "react-redux";

const initState = {
    items: [],
    isLoading: false
}

export const pizzas = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS': {
            return {
                ...state,
                items: action.payload
            }
        }

        case 'SET_LOADED': {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        default:  return state;
    }
    return state;
}