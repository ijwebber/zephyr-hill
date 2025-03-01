import React from "react";

import Page from '../components/mobilePages/Page';
import Home from '../components/mobilePages/Home';
import Reviews from "../components/mobilePages/Reviews";
import Music from '../components/mobilePages/Music';
import Contact from '../components/mobilePages/Contact';
import ContactAbout from "../components/mobilePages/ContactAbout";
import Social from "../components/mobilePages/Social";
import Blog from "../components/mobilePages/Blog";
import imgBMG from "../assets/review-imgs/bmg.png"
import imgClearwave from '../assets/review-imgs/clearwave.jpg'

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
                <div className="represented-footer" style={{padding: '5vh'}}>
                    <p style={{ fontSize: '2.6vh', fontWeight: '500'}}>Represented by</p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <a href="https://www.clearwavemusic.com/music/cwm0130-modern-dance-pop-vocals" 
                            target="_blank" 
                            rel="noreferrer noopener"
                            style={{height: '16vh', padding: '10px 20px'}}
                        >
                            <img src={imgClearwave} alt="clearwave music" style={{height: '100%'}} />
                        </a>
                        <a href="https://bmgproductionmusic.com/en-gb/search/tracks?searchTerm=composer:(Hugh%20Webber)" 
                        target="_blank" 
                        rel="noreferrer noopener">
                            <img src={imgBMG} alt="bmg music productions" style={{height: '16vh'}}/>
                        </a>
                    </div>
                </div>
            </Page>
        </>
    );
}



export default Mobile;