import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [randomColor , setRanodmColor] = useState('16777215');

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = randomNumber.toString(16)
    // console.log(randomNumber,'randomNumber');
    // console.log(randomCode,'randomCode');
    setRanodmColor(randomCode);
  }

  return (
    <>
      {/* <div className="main" style={`background : {#${randomColor}}`}> */}
      <div className="main" style={{background : `#${randomColor}`}}>
        <div className="box">
          <h2 id="colorId">Click Here To Change The Random Background</h2>
          <button id="btn" onClick={handleClick}>Click Here</button>
          <div className="imgPar">
            <img className="clipboard" src="copyIcon.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
