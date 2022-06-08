import './Social.css';
import React from 'react';

import imgSpotify from '../../assets/social-imgs/spotify.png';
import imgFacebook from '../../assets/social-imgs/facebook.png';
import imgTwitter from '../../assets/social-imgs/twitter.png';
import imgInstagram from '../../assets/social-imgs/instagram.png';

function Social() {
    const socials = [["Spotify", imgSpotify, "https://spoti.fi/3EfjTu1"], 
                     ["Facebook", imgFacebook, "https://www.facebook.com/ZephyrHillMusic/"], 
                     ["Twitter", imgTwitter, "https://twitter.com/zephyrhillmusic"], 
                     ["Instagram", imgInstagram, "https://www.instagram.com/zephyrhillmusic/"]]

    return (
        <div className='Social'>
            <div className='main'>
                <div className='container'>
                    {socials.map((item) =>  <a href={item[2]} target="_blank" rel="noreferrer noopener">
                                                <div className='icon' key={item[0] + "Icon"}>
                                                    <img src={item[1]} alt={item[0]}></img>
                                                </div>
                                            </a>    
                                            )}
                </div>
            </div>
        </div>
    );
}

export default Social;