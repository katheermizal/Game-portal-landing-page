
import React, {Component} from 'react';
import { Heading } from '../../Typhography';
import { Subscribe } from '../../Forms';

class UpComingGames extends Component {
    render(){
        return (
            <section className="section__subscribe">
                <div className="container">
                    <Heading type="H2" className="heading-type__5">Get your best games deals first</Heading>
                    <Subscribe />
                </div>
            </section>
        )
    }
}

export default UpComingGames;