import React from 'react';
import './Reviews.css';
import imgCollab from '../../assets/review-imgs/everycollab.png'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import reviews from '../reviews/reviews';

// TODO add quotes
// TODO try and center

function Testimonial(props) {
    const active = props.active != null ? props.active : false;
    const classString = "testimonial " + (active ? "active" : "");

    return (
        <div class={classString}>
            <p class="text">{props.text}</p>
            <p class="author">{props.author}</p>
        </div>
    );
}

function MyCarousel() {
    return (
        <div className="testimonials">
            <div class="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows autoPlay interval={5000} transitionTime={500} showStatus={false} showIndicators={false} centerMode={true} showThumbs={false}>
                    {reviews.map((item, index) => <Testimonial 
                                                        active={index === 0 ? true : false}
                                                        text={item.text}
                                                        author={item.author}
                                                        ></Testimonial>)}
                </Carousel>
            </div></div>
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
            <MyCarousel></MyCarousel>
        </div>
    );
}

export default Reviews;