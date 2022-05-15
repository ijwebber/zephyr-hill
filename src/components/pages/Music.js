import './Music.css';
import { useState } from 'react';
import Slider from '../slider/Slider';
import sliderImages from '../../assets/slider-imgs/images';

function Music(props) {
    const [offset, setOffset] = useState(0);
    console.log(offset)
    return (
        <div className='Music'>
            <Slider size={65} offset={offset} speed={.75} images={sliderImages}></Slider>
            <iframe style={{borderRadius: "12px"}} src={"https://open.spotify.com/embed/track/" + sliderImages[(2 - offset) % sliderImages.length].embed + "?utm_source=generator&theme=0"} width="30%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <button style={{fontSize: "50px"}} onClick={() => setOffset(offset + 1)}>{"<"}</button>
            <button style={{fontSize: "50px"}} onClick={() => setOffset(offset - 1)}>{">"}</button>
        </div>
    );
}

export default Music;