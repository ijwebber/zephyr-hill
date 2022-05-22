import './Home.css';
import imgLogo from '../../assets/home-imgs/ZHMLogo.png';
import imgSoundBetter from '../../assets/home-imgs/SoundBetter.svg';

function Home(props) {
    const navbarOptions = ["MUSIC", "REVIEWS", "CONTACT", "BLOG"]
    const getHeight = () => document.getElementsByName("Page")[0].offsetHeight;
    const scrollTo = index => {window.scroll({top: getHeight() * (index + 1), left: 0, behavior: 'smooth' })};
    const navbarObjs = navbarOptions.map((item, index) => <p className='option' onClick={() => scrollTo(index)}>{item}</p>)

    return (
        <div className='Home'>
            <div className='home-left'></div>
            <div className='home-right'>
                <img className='logo' src={imgLogo}></img>
                <div className='navbar'>
                    {navbarObjs}
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