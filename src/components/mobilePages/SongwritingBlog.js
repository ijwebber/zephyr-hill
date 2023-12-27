import React from 'react';

import './SongwritingBlog.css';

import imgBlog from '../../assets/review-imgs/SCPR.png'

export default function SongwritingBlog() {
    return (
        <div className='mobileSongwritingBlog'>
            <p>Blog writer</p>
            <a href="https://www.scarletriverpr.com/blog/categories/behind-the-lyrics" 
                target="_blank" 
                rel="noreferrer noopener">
                <img src={imgBlog} alt="songwriting blog" />
            </a>
        </div>
    );
}