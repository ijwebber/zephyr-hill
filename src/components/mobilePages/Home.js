import './Home.css';
import React from 'react';
import imgLogo from '../../assets/home-imgs/ZHMLogo.png';
import imgSoundBetter from '../../assets/home-imgs/SoundBetter.svg';

import imgSpotify from '../../assets/social-imgs/spotify.png';
import imgFacebook from '../../assets/social-imgs/facebook.png';
import imgTwitter from '../../assets/social-imgs/twitter.png';
import imgInstagram from '../../assets/social-imgs/instagram.png';


function Home(props) {
    return (
        <div className='mobileHome'>
            <div className='container'>
                <Social></Social>
                <img className='logo' src={imgLogo} alt="Logo"></img>
                <div className='about'>
                    {"I'm a songwriter & creative collaborator who loves writing great songs with great singers".toUpperCase()}
                </div>
                <a href='https://soundbetter.com/profiles/122517-zephyrhillmusic' target="_blank" rel="noreferrer noopener"><img src={imgSoundBetter} className="soundbetter" alt="Soundbetter Link"></img></a>
            </div>
        </div>
    );
}

function Social() {
    const socials = [["Spotify", imgSpotify, "https://spoti.fi/3EfjTu1"], 
                     ["Facebook", imgFacebook, "https://www.facebook.com/ZephyrHillMusic/"], 
                     ["Twitter", imgTwitter, "https://twitter.com/zephyrhillmusic"], 
                     ["Instagram", imgInstagram, "https://www.instagram.com/zephyrhillmusic/"]]


    return (
        <div className='mobileSocial'>
            <div className='main'>
                <div className='container'>
                    {socials.map((item) =>  <a href={item[2]} target="_blank" rel="noreferrer noopener" key={item[0] + "Icon"}>
                                                <div className='icon'>
                                                    <img src={item[1]} alt={item[0]}></img>
                                                </div>
                                            </a>    
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;