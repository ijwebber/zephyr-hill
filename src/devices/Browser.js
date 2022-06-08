import React from "react";

import Page from '../components/browserPages/Page';
import Home from '../components/browserPages/Home';
import Music from '../components/browserPages/Music';
import Reviews from '../components/browserPages/Reviews';
import Contact from '../components/browserPages/Contact';

import Social from '../components/social/Social';

function Browser() {
    return (
        <>
            <Page>
                <Home></Home>
            </Page>
            <Page bg="#222222">
                <Music></Music>
            </Page>
            <Page>
                <Reviews></Reviews>
            </Page>
            <Page>
                <Contact></Contact>
            </Page>
            <Social></Social>
        </>
    );
}

export default Browser;