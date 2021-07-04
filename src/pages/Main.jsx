import React from 'react';
import {Categories, SortItems, PizzaItem, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/setPizzas";
import {addPizzaToCart} from "../redux/actions/cart";
import axios from "axios";

const categoryNames = ["All", "Meat", "Vegetarian", "Grilled", "Spicy", "Closed pizza"];
const sortItems = [
        {name: "popularity", type: "rating", order: "desc"},
        {name: "price", type: "price", order: "desc"},
        {name: "alphabetically", type: "name", order: "asc"}
    ];

function Main() {
    // axios.defaults.baseURL = "https://us-central1-pizzafunction.cloudfunctions.net/api";

    const dispatch = useDispatch();
    const {items, isLoading} = useSelector(({pizzas, filters}) => {
        return {
            items: pizzas.items,
            isLoading: pizzas.isLoading
        }
    });
    const cartItems = useSelector(({cart}) => cart.items);

    const {category, sortBy} = useSelector(({filters}) => filters);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onClickSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);

    const onClickAddPizza = React.useCallback((obj) => {
        dispatch(addPizzaToCart(obj));
    }, []);

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]); // = componentDidMount

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    {/*<MenuListComposition />*/}
                    <Categories activeCategory={category}
                                onClickCategory={onSelectCategory}
                                items={categoryNames}/>
                    <SortItems  activeSortType={sortBy.type}
                                items={sortItems}
                                onClickSortType={onClickSortType}/>
                </div>
                <div className="content__items">
                    {
                        isLoading ? items.map(el => <PizzaItem onClickAddPizza={onClickAddPizza}
                                                               key={el.id}
                                                               count={cartItems[el.id] && cartItems[el.id].items.length}
                                                               {...el}/>) :
                        Array(10).fill(0).map((_, index) =>
                            (<PizzaLoadingBlock key={index} />))}
                </div>
            </div>
        </div>
    )
}

export default Main;