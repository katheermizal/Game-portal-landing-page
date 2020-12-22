import React, {Component} from 'react';
import data from "../../../source/data.json";
import { Post } from '../../Block';
import { Heading } from '../../Typhography';

class LatestPostsList extends Component {
    render(){
        return (
            <div className="posts__list">
                {
                    data.LatestPosts.map( list => {
                        return (
                            <>
                                <Heading type="H3" className="posts__list--title heading-type__2">
                                    { list.sectionTitle }
                                </Heading>
                                <div className="posts__list--item">
                                    {
                                        list.items.map((item, e) => {
                                            return (
                                                <Post
                                                    key={ e }
                                                    title={ item.title }
                                                    postContent={ item.content }
                                                    readMoreLinkVisiblility={ item.readMoreLinkVisible }
                                                    lastUpdateDate={ item.lastUpdateDate }
                                                    postLikesCount={ item.postLikes }
                                                    postUrl={item.url }
                                                    postCommentsCount={ item.postCommentsCount }
                                                    profileURL={ item.proFileURL }
                                                    profileName={ item.profileName }
                                                    profileType={ item.profileTypePro }
                                                    followersCount={ item.followersCount }
                                                    imageUrl={ item.imageUrl }
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </>
                        );
                    })
                } 
            </div>  
        )
    }
}

export default LatestPostsList;