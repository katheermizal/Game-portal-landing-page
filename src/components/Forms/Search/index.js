import React from 'react';
import { Icon } from '../..';
import { Text } from '../../FormElements';

const Search = () => (
    <div className="search">
        <form>
            <Text 
                type="text"
                name="Search"
                id="search"
                labelText="Search"
                wrapperClass="field__input label-hidden"
                placeholderText="Search games, gears, accessories.."
            />
            <Icon type="button" iconClass="icon-search"/>
        </form>
    </div>
)

export default Search;