import React, { useEffect, useState, useRef } from 'react';
import './Music.css';
import Slider from '../slider/Slider';
import sliderImages from '../../assets/slider-imgs/images';

function Music(props) {
    const [offset, setOffset] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const clickLeft = () => {setOffset(offset + 1); setAutoSlide(false);};
    const clickRight = () => {setOffset(offset - 1); setAutoSlide(false);};
    const changeOffset = (n) => {setOffset(offset - n); setAutoSlide(false);};

    let delay = 2000

    useInterval(() => {
        setOffset(offset => offset - 1);
      }, autoSlide ? delay : null);

    let position = (-offset) % sliderImages.length;
    if (position < 0) position = position + sliderImages.length;   

    return (
        <div className='Music'>
            <h1 className='title'>SONGWRITING CREDITS & COLLABORATIONS</h1>
            <Slider size={65} offset={offset} speed={.75} images={sliderImages} clickLeft={clickLeft} clickRight={clickRight} moveSlider={changeOffset} ></Slider>
            <iframe title="Spotify Player" 
                    style={{borderRadius: "12px"}} 
                    src={"https://open.spotify.com/embed/track/" + sliderImages[position].embed + "?utm_source=generator&theme=0"} 
                    onPointerEnter={() => setAutoSlide(false)}
                    width="30%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

export default Music;