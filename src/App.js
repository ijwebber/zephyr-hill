import React, { useEffect, useState } from 'react';
import './App.css';
import Browser from './devices/Browser';
import Mobile from './devices/Mobile';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  useEffect(() => {
      function reportWindowSize() {
          setWindowWidth(window.innerWidth)
          setWindowHeight(window.innerHeight)
      }
      // Trigger this function on resize
      window.addEventListener('resize', reportWindowSize)
      //  Cleanup for componentWillUnmount
      return () => window.removeEventListener('resize', reportWindowSize)
  }, [])

  const useMobile = () => {
    if (windowWidth < windowHeight) {
      return true;
    } else if (windowWidth < 500) {
      return true;
    } else {
      return false;
    }
  }

  const site = useMobile() ? <Mobile></Mobile> : <Browser></Browser>

  return (
    <>{site}</>
  );
}

export default App;
