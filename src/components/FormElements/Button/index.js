import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
    type, 
    wrapperClass,
    buttonClass,
    children,
    ...rest }) => (
    <div className={ wrapperClass } {...rest }>
        <button type={ type } className={ buttonClass }>{ children }</button>
    </div>
)   

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    wrapperClass: PropTypes.string,
    inputClass: PropTypes.string
};

Button.defaultProps = {
    type: 'submit',
    children: 'Submit',
    wrapperClass:'field__button',
    buttonClass: 'button__primary'
};

export default Button;