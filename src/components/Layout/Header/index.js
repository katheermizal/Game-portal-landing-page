import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Logo } from '../index';
import { Search } from '../../Forms';
import HeaderIcons from './HeaderIcons';

class Header extends Component {
    render(){
        return (
            <header className="header">
                <section className="header__top">
                    <div className="container">
                        <div className="header__top--left">
                            <Link to="/"><Logo alt="Logo"/></Link>
                        </div>
                        <div className="header__top--right">
                            <Search />
                            <HeaderIcons />
                        </div>
                    </div>
                </section>
                <section className="header__bottom">
                    <div className="container">
                        <Navigation />
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;