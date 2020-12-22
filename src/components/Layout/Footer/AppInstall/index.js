import React from 'react';
import { AnchorLink, Heading, Content } from '../../../Typhography';
import { Logo } from '../../../Layout';

const AppInstall = () => (
    <div className="footer__app-install">
            <AnchorLink 
                className="link__darkGray"
                url="/"
            >
                <Logo />
                <div>
                    <Heading type="H4" className="heading-type__6">Install the app</Heading> 
                    <Content type="span">Get great deals on games wherever you go!</Content>
                </div>
            </AnchorLink>
    </div>
)

export default AppInstall;