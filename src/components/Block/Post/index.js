import React from 'react';
import { Icon, ImageCard } from '../../../components';
import { Content, AnchorLink } from '../../Typhography';
import ProLabel from '../../Shared/images/pro-icon.png';

const Post = ({
    title,
    postContent,
    lastUpdateDate,
    profileType,
    postLikesCount,
    postUrl,
    postCommentsCount,
    profileURL,
    profileName,
    followersCount,
    imageUrl,
    ...rest }) => (
  
    <div className="post" { ...rest }>
        <div className="post__top">
            <ImageCard 
                cardClass="post__card" 
                imageUrl= { imageUrl }
            > 
                <div className="post__card--top">
                    <AnchorLink className="link__white--large" url= { postUrl }>
                        <h4>{ title }</h4>
                    </AnchorLink>
                    {
                        profileType === true ? 
                            <img src={ ProLabel } alt="Pro" />:
                        null
                    }
                    <Content type="span" className="content-type-3">{ lastUpdateDate }</Content> 
                </div>
               <div className="post__card--bottom">
                    <AnchorLink className="link__blue" url= { profileURL }>
                        <span>{ profileName }</span>
                    </AnchorLink>
                    <Content type="span" className="content-type-4">{ followersCount } Followers</Content> 
                </div>           
            </ImageCard>
        </div>
        <div className="post__middle">
                <div dangerouslySetInnerHTML={{ __html: postContent }} />
        </div>
        <div className="post__bottom">
            <div className="post__bottom--left">
                <Icon type="link" iconClass="icon-repost"/>
                <Icon type="link" iconClass="icon-upload"/>
                <Icon type="link" iconClass="icon-likes"/>
                <Content type="span" className="content-type-4">{ postLikesCount }</Content>
            </div>
            <div className="post__bottom--right">
                {
                    postCommentsCount === null ? 
                        <AnchorLink className="link__blue" url= { postUrl }>Add your comment</AnchorLink>:
                        <AnchorLink className="link__lavender" url= { postUrl }>{ postCommentsCount } Comments</AnchorLink>
                }
                <Icon iconClass="icon-comments"></Icon>
            </div>
        </div>
    </div> 
);


export default Post;