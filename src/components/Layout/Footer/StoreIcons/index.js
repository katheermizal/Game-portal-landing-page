import React from 'react';
import { AnchorLink } from '../../../Typhography';
import { Icon } from '../../../../components';

const StoreIcons = () => (
    <div className="footer__stores">
        <div className="footer__stores--google">
            <Icon iconClass="icon-playstore" />
            <AnchorLink className="link__darkGray">
                Get it on Google Play©
            </AnchorLink>
        </div>
        <div className="footer__stores--apple">
            <Icon iconClass="icon-applestore" />
            <AnchorLink className="link__darkGray">
                Download on the App Store®
            </AnchorLink>
        </div>
    </div>
);

export default StoreIcons;