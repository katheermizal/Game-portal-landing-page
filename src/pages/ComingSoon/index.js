import React from 'react';
import {AnchorLink, Heading, Content} from '../../components/Typhography';
import { Icon } from '../../components';

function ComingSoon() {
    return (
        <>
            <div className="container container__note">
                <Heading type="H1" className="heading-type__4 Note">COMING SOON</Heading>
            </div>
            <div className="dashboard container">
                <div className="row">
                <AnchorLink className="link__white--small" url="/styl-guide">
                        <h4>Link WHITE Latest Posts</h4>
                    </AnchorLink>
                    <br/>
                    <AnchorLink className="link__white--large">
                        <h4>Link WHITE Chanels</h4>
                    </AnchorLink>
                    <br/>
                    <AnchorLink className="link__whisper">
                        <h4>Link WHITE Latest Who to follow?</h4>
                    </AnchorLink>
                    <br/>
                    <AnchorLink className="link__lavender">125 Followers</AnchorLink>
                    <br/>
                    <AnchorLink  className="link__storm-grey">
                        175K Users
                    </AnchorLink>
                    <br/>
                    <AnchorLink className="link__blue">@leroyjenkins</AnchorLink>
                    <br/>
                    <AnchorLink className="link__readmore">Read More</AnchorLink>
                    <br/>
                    <AnchorLink  className="link__border-button--large">
                        Load More
                    </AnchorLink>
                    <br/>
                    <AnchorLink  className="link__border-button--medium">
                        Find more
                    </AnchorLink>
                    <br/>
                    <AnchorLink  className="link__border-button--small">
                        Discover All
                    </AnchorLink>
                    <br/>
                    <AnchorLink  className="link__fill-button">
                        Discover All
                    </AnchorLink>
                    <br/>
                    <Heading type="H2">Hi</Heading>
                    <br/>
                    <Content />
                    <br />
                    <Icon iconClass="icon-user"/>
                    <Icon iconClass="icon-chanels"/>
                    <Icon iconClass="icon-cart"/>
                    <Icon iconClass="icon-wishlisht"/>
                    <Icon iconClass="icon-notification"/>
                    <Icon iconClass="icon-search"/>
                    <Icon iconClass="icon-applestore"/>
                    <Icon iconClass="icon-playstore"/>
                    <Icon iconClass="icon-wishlisht-large"/>
                    <Icon iconClass="icon-comments"/>
                    <Icon iconClass="icon-likes"/>
                    <Icon iconClass="icon-repost"/>
                    <Icon iconClass="icon-upload"/>
                    <Icon iconClass="icon-follow"/>

                    <br />
                    <Icon type="link" iconClass="icon-user"/>
                    <Icon type="link" iconClass="icon-chanels"/>
                    <Icon type="link" iconClass="icon-cart"/>
                    <Icon type="link" iconClass="icon-wishlisht"/>
                    <Icon type="link" iconClass="icon-notification"/>
                    <Icon type="link" iconClass="icon-search"/>
                    <Icon type="link" iconClass="icon-applestore"/>
                    <Icon type="link" iconClass="icon-playstore"/>
                    <Icon type="link" iconClass="icon-wishlisht-large"/>
                    <Icon type="link" iconClass="icon-comments"/>
                    <Icon type="link" iconClass="icon-likes"/>
                    <Icon type="link" iconClass="icon-repost"/>
                    <Icon type="link" iconClass="icon-upload"/>
                    <Icon type="link" iconClass="icon-follow"/>

                    <br />
                    <Icon type="button" iconClass="icon-user"/>
                    <Icon type="button" iconClass="icon-chanels"/>
                    <Icon type="button" iconClass="icon-cart"/>
                    <Icon type="button" iconClass="icon-wishlisht"/>
                    <Icon type="button" iconClass="icon-notification"/>
                    <Icon type="button" iconClass="icon-search"/>
                    <Icon type="button" iconClass="icon-applestore"/>
                    <Icon type="button" iconClass="icon-playstore"/>
                    <Icon type="button" iconClass="icon-wishlisht-large"/>
                    <Icon type="button" iconClass="icon-comments"/>
                    <Icon type="button" iconClass="icon-likes"/>
                    <Icon type="button" iconClass="icon-repost"/>
                    <Icon type="button" iconClass="icon-upload"/>
                    <Icon type="button" iconClass="icon-follow"/>
                </div>
            </div>
        </>
   );
}


export default ComingSoon;