import React from 'react'
import MatrixPic from '../images/matrix_screenshot.png'

function Matrix(){
    return(
        <div className="cube-div">
            <h1>12-Tone Matrix Player</h1>
            <img className="screenshot" src={MatrixPic} alt="12-Tone Matrix screenshot"/>
        </div>
    )
}

export default Matrix