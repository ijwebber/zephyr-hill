import React from 'react';
import './Reviews.css';
import imgCollab from '../../assets/review-imgs/everycollab.png'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// TODO add quotes
// TODO try and center
// TODO 

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
                    <Testimonial 
                                active={true} 
                                text="When I was running a large remote recording project, Hugh was a great help to bounce ideas off. He has a wealth of songwriting, recording, and arrangement experience." 
                                author="BLUEBEARD">
                    </Testimonial>

                    <Testimonial 
                                text="“Louie was an excellent collaborator,
                                and a treat to work with. Both imaginative and flexible,
                                his approach to composition was one that resulted in high quality work,
                                delivered both consistently and with the professionalism you would expect from an industry veteran.”" 
                                author="- Chris Pearson, Founder: Tamalpais Games | 2020">
                    </Testimonial>
                    
                    <Testimonial 
                                text="“He has such a thirst for learning,
                                and both the range and depth of Louie’s knowledge of the subject are truly impressive.
                                He is a gifted composer [and] has the true musician’s grasp of the necessity to write idiomatically for instruments
                                as was evident in the premier of his Piano Trio (piano, violin, cello) movement,
                                given a rapturous reception by the audience in a concert earlier this term (summer 2018)”" 
                                author="- Andrew Painter, Head of Music, Lytchett Minster School and 6th Form | 2018">
                    </Testimonial>

                    <Testimonial 
                                text="“Louie is talented, flexible, and clearly loves his work. He is a real joy to collaborate with.”" 
                                author="- Paul Herve, Founder: Rocket Ship Studios | 2020">
                    </Testimonial>

                    <Testimonial 
                                text="“The music Louie Taylor creates for our shows is outrageously good. 
                                We love how he delivers to such a high standard across so many different musical genres. 
                                I'm still humming his theme tunes now. 
                                We also really appreciate Louie's swift and professional turnaround of audio materials 
                                and his keen ability to discuss a project from outset to final edit. It's a real joy working with him.”" 
                                author="- Neil Mossey, Producer, CoComelon Storytime Spotify Podcast | 2022">
                    </Testimonial>

                    <Testimonial 
                                text="“Louie is a collaborative, creative composer and a joy to work with.  
                                He responds well to feedback and is always keen to develop and 
                                evolve his music so it’s perfectly tailored for each production.”" 
                                author="- Geoff Coward, Director, Coding with QMO and BBC | 2022">
                    </Testimonial>
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