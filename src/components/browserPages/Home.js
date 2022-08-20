import './Home.css';
import React from 'react';
import imgLogo from '../../assets/home-imgs/ZHMLogo.png';
import imgSoundBetter from '../../assets/home-imgs/SoundBetter.svg';
import sliderImages from '../../assets/slider-imgs/images';

function Home(props) {
    const navbarOptions = ["MUSIC", "REVIEWS", "CONTACT", "BLOG"]
    const getHeight = () => document.getElementsByName("Page")[0].offsetHeight;
    const scrollTo = index => {window.scroll({top: getHeight() * (index + 1), left: 0, behavior: 'smooth' })};
    const navbarObjs = navbarOptions.map((item, index) => <p key={"navbar" + index} className='option' onClick={() => scrollTo(index)}>{item}</p>)

    const latestSong = sliderImages[0]

    return (
        <div className='Home'>
            <div className='home-left'></div>
            <div className='home-right'>
                <img className='logo' src={imgLogo} alt="Logo"></img>
                <div className='navbar'>
                    {navbarObjs}
                </div>
                <div className='about'>
                    {"I'm a songwriter & creative collaborator who loves writing great songs with great singers".toUpperCase()}
                </div>
                <div>
                    <a href='https://soundbetter.com/profiles/122517-zephyrhillmusic' target="_blank" rel="noreferrer noopener"><img src={imgSoundBetter} className="soundbetter" alt="Soundbetter Link"></img></a>
                    <div className='latest-song'>
                        <a href={"https://open.spotify.com/track/"+ latestSong.embed} target="_blank" rel="noreferrer noopener"><img src={latestSong.image}></img></a>
                        <p>LATEST SONG</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Home;