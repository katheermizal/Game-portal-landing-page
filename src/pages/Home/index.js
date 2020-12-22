import React, {Component} from 'react';
import { GamesHub, UpComingGames, Subscribe, BannerSlider } from '../../components/Sections';

class Home extends Component {
    render(){
        return (   
            <> 
                <BannerSlider />
                <GamesHub />
                <UpComingGames />
                <Subscribe />
            </>
        )
    }
}

export default Home;