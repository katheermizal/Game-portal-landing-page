import React, {Component} from 'react';
import { SectionTitle } from '../../../components';
import { LatestPostsList, FollowersList, ChannelsList } from '../../BlocksList';

class GamesHub extends Component {
    render(){
        return (
            <section className="section__games-hub">
                <div className="container">
                    <SectionTitle/>
                    <div className="games-hub__row">
                        <LatestPostsList />
                        <ChannelsList />
                        <FollowersList />
                    </div>                     
                </div> 
            </section>
        )
    }
}

export default GamesHub;