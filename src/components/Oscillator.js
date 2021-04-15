import React from 'react'
import OscPic from '../images/oscillator_screenshot.png'

function Oscillator(){
    return(
        <div className="cube-div">
            <h1 className="two-d">Web Oscillator</h1>
            <img className="screenshot" src={OscPic} alt="Web Oscillator screenshot"/>
            <div className="about">
                <b>Web Oscillator</b> is an online synthesizer written in Javascript, CSS, and HTML. The user can produce a drone of their choosing and manipulate its frequency and harmony by dragging the cursor across the page's X and Y axes.<br></br>
                <a href="https://blake-d.github.io/web-oscillator/" target="_blank" rel="noreferrer">launch app</a><br></br>
                <a href="https://github.com/Blake-D/web-oscillator" target="_blank" rel="noreferrer">GitHub repo</a>
            </div>
        </div>
    )
}

export default Oscillator