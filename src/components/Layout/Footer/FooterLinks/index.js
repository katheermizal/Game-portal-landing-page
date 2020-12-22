import React from 'react';
import data from "../../../../source/data.json";
import { AnchorLink, Heading } from '../../../Typhography';

const footerLinksData = data.FooterLinks;

const FooterLinks = () => (
    <div className="footer__links">
        <ul>
            {
                footerLinksData.map((links, i) => {
                    return (
                        <li key={i} className={'footer__links--'+ i}>
                            <Heading type="H4" className="heading-type__6">{links.name}</Heading> 
                            <ul>
                                {
                                    links.subLinks.map((sublink, e) => {
                                        return (
                                            <li key={e}>
                                                <AnchorLink 
                                                    className="link__darkGray"
                                                    url={ sublink.url }
                                                >
                                                    { sublink.name }
                                                </AnchorLink>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </li>
                    );
                })
            } 
        </ul>
    </div>
);

export default FooterLinks;