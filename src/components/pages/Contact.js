import './Contact.css';
import imgLogoStripped from '../../assets/contact-imgs/LogoStripped.png'

function Contact() {
    return (
        <div className='Contact'>
            <img className='img-bg' src={imgLogoStripped}></img>
        </div>
    );
}

export default Contact;