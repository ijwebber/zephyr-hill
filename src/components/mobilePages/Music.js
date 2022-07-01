import React from 'react';
import './Music.css';
import { useState } from 'react';
import Slider from '../slider/Slider';
import sliderImages from '../../assets/slider-imgs/images';

function Music(props) {
    const [offset, setOffset] = useState(0);
    const clickLeft = () => {setOffset(offset + 1);};
    const clickRight = () => {setOffset(offset - 1);};
    const changeOffset = (n) => {setOffset(offset - n);};

    let position = (2 - offset) % sliderImages.length;
    if (position < 0) position = position + sliderImages.length;

    return (
        <div className='mobileMusic'>
            <h1 className='title'>SONGWRITING CREDITS & COLLABORATIONS + {offset}</h1>
            <Slider size={80} offset={offset} speed={.75} images={sliderImages} clickLeft={clickLeft} clickRight={clickRight} moveSlider={changeOffset} ></Slider>
            <iframe 
                title="Spotify Player" 
                style={{borderRadius: "12px"}} 
                src={"https://open.spotify.com/embed/track/" + sliderImages[position].embed + "?utm_source=generator&theme=0"} 
                width="90%" 
                height="80" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            >
            </iframe>
        </div>
    );
}

export default Music;