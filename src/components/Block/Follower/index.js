import React from 'react';
import { AnchorLink, Content } from '../../Typhography';
import { Icon, ImageCard } from '../../../components';

const Follower = ({
    title,
    url,
    followerCount,
    ...rest }) => (
    <div className="follower">
        <ImageCard 
            cardClass="follower__card" 
            url= { url } 
            imageAlt={ title }
            {...rest} 
        > 
            <AnchorLink className="link__whisper" url= { url }>
                <h4>{ title }</h4>
            </AnchorLink>
            <Content type="span" className="content-type-7">{ followerCount } Followers</Content>           
        </ImageCard>
        <Icon type="link" iconClass="icon-follow"/>
    </div> 
);


export default Follower;