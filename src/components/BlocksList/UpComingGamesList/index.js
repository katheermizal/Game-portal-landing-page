import React, {Component} from 'react';
import data from "../../../source/data.json";
import { SectionTitle } from '../..';
import { Game } from '../../Block';
import { AnchorLink } from '../../Typhography';

class UpComingGamesList extends Component {
    render(){
        return (
            <>
                {
                    data.UpcomingGames.map( upcoming => {
                        return (
                            <>
                                <SectionTitle 
                                    heading={ upcoming.sectionTitle }
                                    headingClass="heading-type__4" 
                                    content={ upcoming.sectionNote }
                                    ulr="#"
                                />
                                <div className="games__list">
                                    {
                                        upcoming.games.map((game, e) => {
                                            return (
                                                <Game 
                                                    key={e}
                                                    title={ game.title }
                                                    url={ game.url }
                                                    actualPrice={ game.actualPrice }
                                                    specialPrice={ game.actualPrice }
                                                    discountValue={ game.discountValue }
                                                    imageUrl={ game.imageUrl }
                                                />
                                            );
                                        })
                                    }
                                </div>
                                <div className="games__more">
                                    <AnchorLink  className="link__border-button--large">{upcoming.loadMoreLinkName}</AnchorLink>
                                </div>
                            </>
                        );
                    })
                } 
            </>
        )
    }
}

export default UpComingGamesList;