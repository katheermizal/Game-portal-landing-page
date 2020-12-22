import React from 'react';
import PropTypes from 'prop-types';
import { AnchorLink, Heading, Content } from '../Typhography';

const SectionTitle = ({ 
    heading, 
    headingClass, 
    content,
    linkText, 
    ulr }) => (
    <div className="section__titile">
        <div className="section__titile--heading">
            <Heading type="H2" className={ headingClass }>
                { heading }
            </Heading>
            <Content type="span" className="content-type-5">{ content }</Content>
        </div>
        <AnchorLink  className="link__border-button--small" url={ ulr }>
            { linkText }
        </AnchorLink>
    </div>
)   

SectionTitle.propTypes = {
    heading: PropTypes.string,
    headingClass: PropTypes.string,
    content: PropTypes.string,
    linkText: PropTypes.string,
    ulr: PropTypes.string
};

SectionTitle.defaultProps = {
    heading: 'Games Hub',
    headingClass: 'heading-type__3',
    content:'The best offers, new games, AAA titles and high-quality video games..',
    url:'/coming-soon'
};

export default SectionTitle;