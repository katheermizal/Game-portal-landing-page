import React from 'react';
import { NavLink } from 'react-router-dom';
import data from "../../../source/data.json";

const mainMenuData = data.MainMenu;

const Navigation = () => (
    <nav className="navigation">
        <ul>
            {
                mainMenuData.map((menu, i)=> (
                    <li key={i}>
                        <NavLink to={ menu.path } className={'link__white--large ' + menu.class}  activeClassName="active">
                            <img src={ menu.iconUrl } alt={ menu.title }/>
                            <span>{ menu.title }</span>
                        </NavLink>
                    </li>   
                ))
            }
        </ul>
    </nav>
)

export default Navigation;