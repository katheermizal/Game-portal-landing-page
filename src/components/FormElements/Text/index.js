import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ 
    type, 
    name,
    id,
    labelText,
    wrapperClass,
    inputClass,
    placeholderText,
    ...rest }) => (
    <div className={ wrapperClass }>
        <label htmlFor={ id }>{ labelText }</label>
        <input type={ type } name={ name } id={ id } className={ inputClass } placeholder={ placeholderText } {...rest }/>
    </div>
)   

Text.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    labelText: PropTypes.string,
    wrapperClass: PropTypes.string,
    inputClass: PropTypes.string
};

Text.defaultProps = {
    type: 'text',
    wrapperClass:'field__input',
    inputClass: 'field__input--text'
};

export default Text;