import './Home.css';
import Logo from '../../assets/home-imgs/ZHMLogo.png';

function Home(props) {
    const navbarOptions = ["HOME", "MUSIC", "REVIEWS", "CONTACT", "BLOG"]

    return (
        <div className='Home'>
            <div className='home-left'></div>
            <div className='home-right'>
                <img className='logo' src={Logo}></img>
                <div className='navbar'>
                    {navbarOptions.map((item) => <p className='option'>{item}</p>)}
                </div>
            </div>
        </div>
    );
}

export default Home;