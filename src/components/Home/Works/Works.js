import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Works.css';
import img1 from '../../../images/carousel-1.png';
import img2 from '../../../images/carousel-2.png';
import img3 from '../../../images/carousel-3.png';
import img4 from '../../../images/carousel-4.png';
import img5 from '../../../images/carousel-5.png';
import Work from '../Work/Work';
const carouseldata = [
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
    {img: img5}
] 
const Works = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
        {width: 1500, itemsToShow: 5},
    ]
    return (
        <div className="container works-area">
            <h2 className="text-center">Here are some of <span>our works</span></h2>
            <Carousel breakPoints={breakPoints}>
            {
                carouseldata.map(data => <Work data={data}></Work>)
            }
            </Carousel>
        </div>
    );
};

export default Works;