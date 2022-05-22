import './Home.css';
import imgLogo from '../../assets/home-imgs/ZHMLogo.png';
import imgSoundBetter from '../../assets/home-imgs/SoundBetter.svg';

function Home(props) {
    const navbarOptions = ["MUSIC", "REVIEWS", "CONTACT", "BLOG"]

    return (
        <div className='Home'>
            <div className='home-left'></div>
            <div className='home-right'>
                <img className='logo' src={imgLogo}></img>
                {/*TODO add the scroll part (look at ivory games)*/}
                <div className='navbar'>
                    {navbarOptions.map((item) => <p className='option'>{item}</p>)}
                </div>
                <div className='about'>
                    {"I'm a songwriter & creative collaborator who loves writing great songs with great singers".toUpperCase()}
                </div>
                <a href='https://soundbetter.com/profiles/122517-zephyrhillmusic' target="_blank"><img src={imgSoundBetter} className="soundbetter"></img></a>
            </div> 
        </div>
    );
}

export default Home;