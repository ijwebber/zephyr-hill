import React from "react";

import Page from '../components/mobilePages/Page';
import Home from '../components/mobilePages/Home';
import Reviews from "../components/mobilePages/Reviews";
import Music from '../components/mobilePages/Music';
import Contact from '../components/mobilePages/Contact';
import ContactAbout from "../components/mobilePages/ContactAbout";
import Social from "../components/mobilePages/Social";

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
        </>
    );
}



export default Mobile;