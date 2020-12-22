import React, { Component } from 'react';
import { Content } from '../../Typhography';
import FooterLinks from './FooterLinks';
import AppInstall from './AppInstall';
import StoreIcons from './StoreIcons';
import PaymentIcons from './PaymentIcons';

class Footer extends Component {
    render(){
        return (
            <footer className="footer">
                <section className="footer__top">
                    <div className="container">
                        <FooterLinks />
                        <AppInstall />
                        <StoreIcons />
                    </div>
                </section>
                <section className="footer__bottom">
                    <div className="container">
                        <div className="footer__copyright">
                            <Content className="content-type-6">
                                Copyright © 2020. All Rights Reserved. <br/>
                                Use of this Web site constitutes acceptance of the Terms and Conditions and Privacy policy. All copyrights, trade marks, service marks belong to the corresponding owners.
                            </Content>
                        </div>
                        <PaymentIcons />
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;