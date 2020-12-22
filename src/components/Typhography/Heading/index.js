import React from 'react';
import PropTypes from 'prop-types';


const Heading = ({children, type, ...rest }) => (
    type === 'H1' ? <h1 {...rest}>{children}</h1>:
    type === 'H2' ? <h2 {...rest}>{children}</h2>:
    type === 'H3' ? <h3 {...rest}>{children}</h3>:
    type === 'H4' ? <h4 {...rest}>{children}</h4>:
    type === 'H5' ? <h5 {...rest}>{children}</h5>:
    <h6 {...rest}>{children}</h6>
)

Heading.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string
};

Heading.defaultProps = {
    children: 'Heading'
};

export default Heading;