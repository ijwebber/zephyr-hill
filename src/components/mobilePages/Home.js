import './Home.css';
import React from 'react';
import imgLogo from '../../assets/home-imgs/ZHMLogo.png';
import imgSoundBetter from '../../assets/home-imgs/SoundBetter.svg';
import sliderImages from '../../assets/slider-imgs/images';


function Home(props) {
    const latestSong = sliderImages[0]

    return (
        <div className='mobileHome'>
            <div className='container'>
                <img className='logo' src={imgLogo} alt="Logo"></img>
                <div className='about'>
                    {"I'm a songwriter & creative collaborator who loves writing great songs with great singers".toUpperCase()}
                </div>
                <div className='links'>
                <a href='https://soundbetter.com/profiles/122517-zephyrhillmusic' target="_blank" rel="noreferrer noopener"><img src={imgSoundBetter} className="soundbetter" alt="Soundbetter Link"></img></a>
                    <div className='latest-song'>
                            <a href={"https://open.spotify.com/track/"+ latestSong.embed} target="_blank" rel="noreferrer noopener">
                                <img src={latestSong.image} alt="Latest Song"></img>
                            </a>
                            <p>LATEST SONG</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Home;