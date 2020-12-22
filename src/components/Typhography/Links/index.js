import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AnchorLink = ({
    children, 
    title, 
    url, 
    className,
    ...rest }) => (
    <Link to={ url }
          titile={ title }
          className={ className }
          { ...rest }
    >
        {children}
    </Link>
);

AnchorLink.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    url: PropTypes.string.isRequired,
    className: PropTypes.string
};

AnchorLink.defaultProps = {
    children: 'Discover All',
    url: '/coming-soon',
    className: 'link'
};

export default AnchorLink;