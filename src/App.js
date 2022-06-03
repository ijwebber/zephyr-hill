import React from 'react';
import './App.css';
import Page from './components/pages/Page';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Reviews from './components/pages/Reviews';
import Contact from './components/pages/Contact';

//import Social from './components/social/Social';

function App() {
  return (
    <div className="App">
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
      {/*<Social></Social>*/}
    </div>
  );
}

export default App;
