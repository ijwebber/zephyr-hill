import React from 'react';
import './Contact.css';
import imgLogoStripped from '../../assets/contact-imgs/LogoStripped.png'
import emailjs from 'emailjs-com';

function checkValidEntry(info) {
    let name = info[0].value
    let email = info[1].value
    let message = info[2].value
    
    if (name === "") {
        return false
    } else if (email === "") {
        return false
    } else if ((message) === "") {
        return false
    } else {
        return true;
    }
    
}

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        if (checkValidEntry(e.target)) {
            emailjs.sendForm('service_48prp2r', 'template_gao1a7v', e.target, 'NHL-4nqYyeFLs9hnN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        } else {
            console.log("Invalid")
        }
    }

    return (
        <div className='Contact'>
            <img className='img-bg' src={imgLogoStripped} alt="Logo"></img>
            <div className='form'>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div className="title">CONTACT ME</div>
                        <div className="enter-box">
                            <input type="text" className="" placeholder="Name" name="name"/>
                        </div>
                        <div className="enter-box">
                            <input type="email" className="" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="enter-box">
                            <textarea className="" id="" cols="30" rows="8" placeholder="Message" name="message"></textarea>
                        </div>
                        <div className="">
                            <input className = "submit" type="submit" value="SEND"></input>
                        </div>
                    </form>
            </div>
            <div className='text'>
                I love working with talented artists and singers and this is my favourite way to write new songs.
                <br></br>
                <br></br>
                It’s all about getting together and creating something greater than your individual ideas, and as a creative I live for those special moments during a co-write when you are onto a great idea or an addictive melody.
                <br></br>
                <br></br>
                As part of that creative process I can also help you identify your signature strengths and writing styles, and provide some creative direction.
            </div>
        </div>
    );
}

export default Contact;