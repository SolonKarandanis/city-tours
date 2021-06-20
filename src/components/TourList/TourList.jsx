import React, { Component } from 'react';
import './TourList.scss';

// components
import Tour from '../Tour/Tour.jsx';

// data
import {tourData} from '../../tourData';

export default class TourList extends Component {
    state={
        tours: tourData
    };

    removeTour= id =>{
        const { tours } =this.state;
        const filteredTours= tours.filter(tour => tour.id !== id);
        this.setState({
            tours: filteredTours
        })
    }
    render() {
        const {tours}= this.state;
        return (
            <section className="tourlist">
                {tours.map(tour =>{
                    return(
                        // we need the key attr for looping
                        // and then pass the tour as a prop named tour
                        <Tour
                            key={tour.id} 
                            tour={tour}
                            removeTour={this.removeTour}/>
                    )
                })}
            </section>
        )
    }
}
