import React from "react";

import Page from '../components/mobilePages/Page';
import Home from '../components/mobilePages/Home';
import Reviews from "../components/mobilePages/Reviews";
import Music from '../components/mobilePages/Music';
import Contact from '../components/mobilePages/Contact';
import ContactAbout from "../components/mobilePages/ContactAbout";
import Social from "../components/mobilePages/Social";
import Blog from "../components/mobilePages/Blog";
import SongwritingBlog from "../components/mobilePages/SongwritingBlog";
import imgBMG from "../assets/review-imgs/bmg.png"

function Mobile() {
    return (
        <>
            <Social></Social>
            <Page>
                <Home></Home>
            </Page>
            <Page bg="#222222" ht="50" ctr={true}>
                <Music></Music>
            </Page>
            
            <Page>
                <Reviews></Reviews>
            </Page>
            <Page>
                <ContactAbout></ContactAbout>
            </Page>
            <Page>
                <Contact></Contact>
            </Page>
            <Page bg="#222222">
                <Blog></Blog>
            </Page>
            <Page ht="30">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <SongwritingBlog></SongwritingBlog>
                    <div className='mobileSongwritingBlog'>
                        <p>Represented by</p>
                        <a href="https://bmgproductionmusic.com/en-gb/search/tracks?searchTerm=composer:(Hugh%20Webber)" 
                        target="_blank" 
                        rel="noreferrer noopener">
                            <img src={imgBMG} alt="bmg music productions"/>
                        </a>
                    </div>
                </div>
            </Page>
        </>
    );
}



export default Mobile;