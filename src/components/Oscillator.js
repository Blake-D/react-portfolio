import React from 'react'
import OscPic from '../images/oscillator_screenshot.png'

function Oscillator(){
    return(
        <div className="cube-div">
            <h1>Web Oscillator</h1>
            <img className="screenshot" src={OscPic} alt="Web Oscillator screenshot"/>
            <div className="about">
                <b class="two-d"><a href="https://blake-d.github.io/web-oscillator/" target="_blank" rel="noreferrer">Web Oscillator</a></b> is an online synthesizer written in Javascript, CSS, and HTML. The user can produce a drone of their choosing and manipulate its frequency and harmony by dragging the cursor across the page's X and Y axes.
            </div>
        </div>
    )
}

export default Oscillator