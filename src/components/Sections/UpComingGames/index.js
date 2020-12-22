
import React, {Component} from 'react';
import { UpComingGamesList } from '../../BlocksList';

class UpComingGames extends Component {
    render(){
        return (
            <section className="section__upcoming-games">
                <div className="container">
                    <UpComingGamesList />
                </div>
            </section>
        )
    }
}

export default UpComingGames;