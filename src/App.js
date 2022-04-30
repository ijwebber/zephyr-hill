import { useState } from 'react';
import './App.css';
import Slider from './components/slider/Slider';
import sliderImages from './assets/slider-imgs/images';

function App() {
  const [offset, setOffset] = useState(0);
  return (
    <div className="App">
      <Slider size={65} offset={offset} speed={.75} images={sliderImages}></Slider>
      <button style={{fontSize: "50px"}} onClick={() => setOffset(offset + 1)}>{"<"}</button>
      <button style={{fontSize: "50px"}} onClick={() => setOffset(offset - 1)}>{">"}</button>
      
    </div>
  );
}

export default App;
