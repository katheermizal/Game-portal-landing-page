import React from 'react';
import { AnchorLink, Content } from '../../Typhography';
import { ImageCard } from '../..';

const Channel = ({
    title,
    url,
    usersCount,
    ...rest }) => (
    <div className="channel">
        <ImageCard 
            cardClass="channel__card" 
            url= { url } 
            imageAlt={ title }
            {...rest} 
        > 
            <AnchorLink className="link__white--small" url= { url }>
                <h4>{ title }</h4>
            </AnchorLink>
            <Content type="span" className="content-type-7">{ usersCount } Users</Content>           
        </ImageCard>
    </div> 
);


export default Channel;