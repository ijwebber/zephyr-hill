import './Music.css';
import { useState } from 'react';
import Slider from '../slider/Slider';
import sliderImages from '../../assets/slider-imgs/images';

function Music(props) {
    const [offset, setOffset] = useState(0);
    const clickLeft = () => setOffset(offset + 1);
    const clickRight = () => setOffset(offset - 1);

    let position = props.position % sliderImages.length;
    if (position < 0) position = position + sliderImages.length;

    return (
        <div className='Music'>
            <h1 className='title'>SONGWRITING CREDITS & COLLABORATIONS</h1>
            <Slider size={65} offset={offset} speed={.75} images={sliderImages} clickLeft={clickLeft} clickRight={clickRight} ></Slider>
            {/* TODO make spotify resize, then check scrollbars*/}
            <iframe style={{borderRadius: "12px"}} src={"https://open.spotify.com/embed/track/" + sliderImages[Math.abs(2 - offset) % sliderImages.length].embed + "?utm_source=generator&theme=0"} width="30%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    );
}

export default Music;