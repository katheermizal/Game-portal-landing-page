import React from 'react';
import { AnchorLink, Content } from '../../Typhography';
import { Icon } from '../../../components';

const Game = ({
    title,
    url,
    actualPrice,
    specialPrice,
    discountValue,
    imageUrl }) => (
    <div className="game">
        <div className="game__wrapper">
            <div className="game__image">
                <Icon type="link" iconClass="icon-wishlisht-large"/>
                <img src={ imageUrl } alt={ title } />
            </div>
            <div className="game__details">   
                <AnchorLink className="link__white--small" url= { url }>
                    <h4 dangerouslySetInnerHTML={{ __html: title }} />
                </AnchorLink>
                <Content className="price">€{ specialPrice }</Content>
                <div>
                    <Content type="span" className="price__actual">€{ actualPrice }</Content>
                    <Content type="span" className="discount">{ discountValue }%OFF</Content>
                </div>
            </div> 
            <div className="game__preorder">  
                <AnchorLink className="link__fill-button" url= { url }>Pre Order</AnchorLink>
            </div>
        </div>
    </div> 
);


export default Game;