import React from 'react'
import OscPic from '../images/oscillator_screenshot.png'

function Oscillator(){
    return(
        <div className="cube-div">
            <h1 className="two-d">Web Oscillator</h1>
            <img className="screenshot" src={OscPic} alt="Web Oscillator screenshot"/>
        </div>
    )
}

export default Oscillator