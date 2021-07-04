import React, {useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";

function Categories({ activeCategory, onClickCategory, items }) {
    const [popup, setPopup] = useState(false);

    const sortRef = useRef();
    const togglePopup = () => {
        setPopup(!popup);

    }

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(sortRef.current)) {
            setPopup(false);
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    const clickToActivate = (index) => {
        onClickCategory(index);
        setPopup(false);
    }

    const listMobile = items.map((e, index) => (<li onClick={() => clickToActivate(index)} key={e}>{e}</li>))

    const list = items.map((el, index) => (
        <li className={activeCategory === index ? 'active' : ''}
            onClick={() => {onClickCategory(index)}}
            key={el}
        >{el}</li>
    ))

    return (
        <>
            <div ref={sortRef} className="sortMobile">
                <div className="sortMobile__label">
                    <svg className={popup ? 'opened' : ''}
                         width="10"
                         height="6"
                         viewBox="0 0 10 6"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <span onClick={togglePopup}>
                        {activeCategory === null ? 'all' : items[activeCategory].valueOf()}
                    </span>
                </div>
                {popup &&
                <div className="sortMobile__popup">
                    <ul>
                        {listMobile}
                    </ul>
                </div>
                }
            </div>


            <div className="categories">
                <ul>
                    {list}
                </ul>
            </div>
        </>

    )
}

Categories.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
}
Categories.defaultProps = {
    activeCategory: 0, items: []
}
export default Categories;