import React from 'react';

import './Social.css'
import { socials } from '../browserPages/Social';

function Social() {
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

export default Social;