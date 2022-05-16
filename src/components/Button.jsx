import React from 'react';
import classnames from 'classnames';

const Button = ({onClick, className, outline, children}) => {
    return (
        <button href="/cart.html" onClick={onClick} className={classnames('button',
            className,
            {'button--outline' : outline})}>
            {children}
        </button>
    )
}

export default Button;