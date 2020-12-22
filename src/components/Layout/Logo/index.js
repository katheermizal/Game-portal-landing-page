import React from 'react';
import logo from '../../Shared/images/logo.svg';

const Logo = (...props) => (
    <img src={logo} { ...props}/>
);


export default Logo;