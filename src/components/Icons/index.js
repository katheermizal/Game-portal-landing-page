import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Icon = ({children, type, iconClass, ...rest }) => (
    type === 'button' ? 
        <button className="button__icon" { ...rest } >
            <span className={ iconClass }></span>
            { children }
        </button>:
    type === 'link' ? 
        <Link className="link__icon" {...rest} >
            <span className={iconClass}></span>
            { children }
        </Link>:
    <span className={ iconClass } {...rest}>{ children }</span>
)

Icon.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string
};

export default Icon;