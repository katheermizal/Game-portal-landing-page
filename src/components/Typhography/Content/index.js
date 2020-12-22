import React from 'react';
import PropTypes from 'prop-types';


const Content = ({children, type, ...rest }) => (
    type === 'div' ? <div {...rest}>{children}</div>:
    type === 'span' ? <span {...rest}>{children}</span>:
    type === 'em' ? <em {...rest}>{children}</em>:
    type === 'i' ? <i {...rest}>{children}</i>:
    type === 'b' ? <b {...rest}>{children}</b>:
    <p {...rest}>{children}</p>
)

Content.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string
};

Content.defaultProps = {
    children: 'Add content here ....'
};

export default Content;