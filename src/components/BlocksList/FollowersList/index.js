import React, {Component} from 'react';
import data from "../../../source/data.json";
import { Follower } from '../../Block';
import { AnchorLink, Heading } from '../../Typhography';

class FollowersList extends Component {
    render(){
        return (
            <div className="followers__list">
                {
                    data.FollowersLists.map( followersList => {
                        return (
                            <>
                                <Heading type="H3" className="followers__list--title heading-type__2">
                                    { followersList.sectionTitle }
                                </Heading>
                                <div className="followers__list--item">
                                    {
                                        followersList.followers.map((follower, e) => {
                                            return (
                                                <Follower
                                                    key={ e }
                                                    title={ follower.name }
                                                    url={ follower.url }
                                                    followerCount={ follower.followersCount }	
                                                    imageUrl={ follower.imageUrl }
                                                />
                                            );
                                        })
                                    }
                                    
                                </div>
                                <AnchorLink  className="followers__list--link link__border-button--medium">
                                    { followersList.linkName }
                                </AnchorLink>
                            </>
                        );
                    })
                } 
            </div>  
        )
    }
}

export default FollowersList;