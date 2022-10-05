import "./styles.css";
import { useState } from 'react';

function App() {
  function includes(slide) {
    if (count > 4) {
      setCount(count-4)
    } else if (count < 1) {
      setCount(count+4)
    }
    return slide.includes(count) ? `${slide} active` : `${slide} inactive`
  }
  const [count, setCount] = useState(1);
  return (
    <div className="container">
      <div className={includes('slide1')}><h1>Italy</h1></div>
      <div className={includes('slide2')}><h1>Madrid</h1></div>
      <div className={includes('slide3')}><h1>Barcelona</h1></div>
      <div className={includes('slide4')}><h1>Paris</h1></div>
      <button onClick={() => {setCount(count+1)}}><i class="fa-solid fa-circle-arrow-right"></i></button>
      <button onClick={() => {setCount(count-1)}}><i class="fa-solid fa-circle-arrow-left"></i></button>
    </div>
  );
}

export default App;
