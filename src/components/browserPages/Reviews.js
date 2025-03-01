import React from 'react';
import './Reviews.css';
import imgCollab from '../../assets/review-imgs/everycollab.png'
import imgClearwave from '../../assets/review-imgs/clearwave.jpg'
import imgBMG from '../../assets/review-imgs/bmg.png'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import reviews from '../reviews/reviews';

function Testimonial(props) {
    const active = props.active != null ? props.active : false;
    const classString = "testimonial " + (active ? "active" : "");

    return (
        <div className={classString}>
            <p className="text">{props.text}</p>
            <p className="author">{props.author}</p>
        </div>
    );
}

function MyCarousel() {
    return (
        <div className="testimonials">
            <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows autoPlay interval={5000} transitionTime={500} showStatus={false} showIndicators={false} centerMode={true} showThumbs={false}>
                    {reviews.map((item, index) =>   <Testimonial 
                                                        key={"testimonial"+index}
                                                        active={index === 0 ? true : false}
                                                        text={item.text}
                                                        author={item.author}
                                                    >
                                                    </Testimonial>)}
                </Carousel>
            </div>
        </div>
    );
}

function Clearwave() {
    return (
        <div className='clearwave'>
            <a href="https://www.clearwavemusic.com/music/cwm0130-modern-dance-pop-vocals" 
                target="_blank" 
                rel="noreferrer noopener">
                <img src={imgClearwave} alt="clearwave music" />
            </a>
        </div>
    );
}

function Reviews() {
    return (
        <div className='Reviews'>
            <img src={imgCollab} alt="Photos of collaborators" className="img-collab"></img>
            <div className='bg-main'>
                <div className='gradient'></div>
                <div className='white'></div>
            </div>
            <div className='title'>
                REVIEWS
            </div>
            <MyCarousel />
            <p className='represented'>Represented by</p>
            <div className='represented' style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Clearwave />
                <div className='songwritingBlog'>
                    <a href="https://bmgproductionmusic.com/en-gb/search/tracks?searchTerm=composer:(Hugh%20Webber)" 
                    target="_blank" 
                    rel="noreferrer noopener">
                        <img src={imgBMG} alt="bmg music productions" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Reviews;