import React, {Component} from 'react';
import { Icon } from '../../../../components';

class HeaderIcons extends Component {
    render(){
        return (
            <div className="header__icons">
                <div className="header__icons--left">
                    <Icon type="link" iconClass="icon-user"/>
                    <Icon type="link" iconClass="icon-chanels"/>
                </div>
                <div className="header__icons--right">
                    <Icon type="link" iconClass="icon-notification active"/>
                    <Icon type="link" iconClass="icon-wishlisht"/>
                    <Icon type="link" iconClass="icon-cart"/>
                </div>
            </div>
        )
    }
}

export default HeaderIcons;