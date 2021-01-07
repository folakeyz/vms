import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from '../../img/one.jpg';
import two from '../../img/two.jpg';
import three from '../../img/three.jpg';

 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={one} />
                </div>
                <div>
                    <img src={two}/>
                </div>
                <div>
                    <img src={three} />
                </div>
            </Carousel>
        );
    }
};
 export default DemoCarousel;
