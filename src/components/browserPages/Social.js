import './Social.css';
import React from 'react';

import imgSpotify from '../../assets/social-imgs/spotify.png';
import imgFacebook from '../../assets/social-imgs/facebook.png';
// import imgInstagram from '../../assets/social-imgs/instagram.png';
import imgBandcamp from '../../assets/social-imgs/bandcamp.png'
import imgBlog from '../../assets/social-imgs/medium.png';

export const socials = [["Spotify", imgSpotify, "https://open.spotify.com/playlist/5Vde76Fy1EiEg11KdCO4A2?si=e12c1d6079264d35"], 
                     ["Facebook", imgFacebook, "https://www.facebook.com/ZephyrHillMusic/"],
                     ["Bandcamp", imgBandcamp, "https://zephyrhillmusic.bandcamp.com"],
                     ["Blog", imgBlog, "https://medium.com/@zephyrhillmusic"]]

function Social() {
    return (
        <div className='Social'>
            <div className='main'>
                <div className='container'>
                    {socials.map((item) =>  <a href={item[2]} target="_blank" rel="noreferrer noopener" key={item[0] + "Icon"}>
                                                <div className='icon' >
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