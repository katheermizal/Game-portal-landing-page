import React, {Component} from 'react';
import data from "../../../source/data.json";
import { Channel } from '../../Block';
import { AnchorLink, Heading } from '../../Typhography';

class ChannelsList extends Component {
    render(){
        return (
            <div className="channels__list">
                {
                    data.Chanels.map( chanels => {
                        return (
                            <>
                                <Heading type="H3" className="channels__list--title heading-type__2">
                                    { chanels.sectionTitle }
                                </Heading>
                                <div className="channels__list--items">
                                    {
                                        chanels.items.map((chanel, e) => {
                                            return (
                                                <Channel
                                                    key={ e }
                                                    title={ chanel.name }
                                                    url={ chanel.url }
                                                    usersCount={ chanel.users }	
                                                    imageUrl={ chanel.imageUrl }
                                                />
                                            );
                                        })
                                    }
                                    
                                </div>
                                <AnchorLink  className="channels__list--link link__border-button--medium">
                                    { chanels.linkName }
                                </AnchorLink>
                            </>
                        );
                    })
                } 
            </div>  
        )
    }
}

export default ChannelsList;