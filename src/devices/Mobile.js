import React from "react";

import Page from '../components/mobilePages/Page';
import Home from '../components/mobilePages/Home';
import Reviews from "../components/mobilePages/Reviews";
//import Music from '../components/mobilePages/Music';
//import Contact from '../components/mobilePages/Contact';

function Mobile() {
    return (
        <>
            <Page>
                <Home></Home>
            </Page>
            <Page bg="#222222">

            </Page>
            <Page bg="blue">
                <Reviews></Reviews>
            </Page>
            <Page bg="red">

            </Page>
        </>
    );
}

export default Mobile;