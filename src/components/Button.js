import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const Styles = ['btn--primary','btn--outline']
const Sizes = ['btn--medium','btn--large']

export const Button =({
    onClick, children, type, buttonStyle, buttonSize
}) => {
    const checkButtonStyles = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
    const checkButtonSizes = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonSizes} ${checkButtonStyles}`} onClick={onClick} type={type}>
                {children}
            </button>

        </Link>
    )
};


