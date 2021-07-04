import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";

function PizzaItem({id, imageUrl, name, types, price, onClickAddPizza, count, sizes}) {
    const [activeSize, setActiveSize] = useState(sizes[0]);
    const clickToActivateSize = (element) => {
        setActiveSize(element);
    }

    const onAddPizza = (obj) => {
        onClickAddPizza(obj);
    }

    const typeNames = ['Thin', 'Traditional'];
    const [activeType, setActiveType] = useState(types[0]);
    const clickToActivate = (element) => {
        setActiveType(element);
    }
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typeNames.map((element, index) =>
                        <li key={index} onClick={() => clickToActivate(index)}
                            className={activeType === index ? 'active' : '' ||  !types.includes(index) ?
                                                             'disabled': ''}>{element}</li>)}
                </ul>
                <ul>
                    {
                        sizes.map((el) => <li key={el} onClick={() => clickToActivateSize(el)}
                                                     className={activeSize === el ? 'active' : ''
                                                     }>{el} см.</li>)
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price} Kč</div>
                <Button onClick={() => onAddPizza({id, imageUrl, name, activeType, price, onClickAddPizza, activeSize})}
                        className="button button--outline button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Add</span>
                    <i>{count}</i>
                </Button>
            </div>
        </div>
    )
}

PizzaItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    onClickAddPizza: PropTypes.func
}
PizzaItem.defaultProps = {
    types: [],
    sizes: [],
    price: 0,
    count: 0
}

export default PizzaItem;